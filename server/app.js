const Koa = require('koa')
const { ApolloServer, gql } = require('apollo-server-koa')
const { open, getCollection } = require('./db')
const app = new Koa()
const port = 4000
const connection = open()

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

const resolvers = {
  Query: {
    hello: async () => {
      const collectionTodos = await getCollection(connection, 'todos')
        .catch((e) => {
          throw `Getting collection failed: ${e}`
        })

      const listOfTodos = await collectionTodos.find().toArray()
        .catch((e) => {
          throw `Getting list failed: ${e}`
        })
      return listOfTodos[0]['todo']
    },
  },
}

const server = new ApolloServer({ typeDefs, resolvers })
server.applyMiddleware({ app })

app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
);
