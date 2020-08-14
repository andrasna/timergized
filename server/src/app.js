import ApolloServerKoa from 'apollo-server-koa'
const { ApolloServer } = ApolloServerKoa 

import typeDefs from './type-defs.js'
import resolvers from './resolvers.js'

const server = new ApolloServer({ typeDefs, resolvers })

import Koa from 'koa'
const app = new Koa()

server.applyMiddleware({ app })

const port = 4000
app.listen(port, () =>
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`),
)
