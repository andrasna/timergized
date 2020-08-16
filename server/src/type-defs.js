import ApolloServerKoa from 'apollo-server-koa'

const { gql } = ApolloServerKoa 

const typeDefs = gql`
  type User {
    _id: ID
    name: String 
    email: String
  }

  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`

export default typeDefs