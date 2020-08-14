import ApolloServerKoa from 'apollo-server-koa'

const { gql } = ApolloServerKoa 

const typeDefs = gql`
  type Query {
    hello: String!
  }
`

export default typeDefs