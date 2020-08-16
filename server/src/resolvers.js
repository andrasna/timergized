import { open, getCollection } from './db.js'
const connection = open()

const resolvers = {
  Query: {
    users: async () => {
      const collectionUsers = await getCollection(connection, 'users')
        .catch((e) => {
          throw `Getting collection failed: ${e}`
        })

      const listOfUsers = await collectionUsers.find().toArray()
        .catch((e) => {
          throw `Getting list failed: ${e}`
        })
      return listOfUsers
    },
  },

  Mutation: {
    createUser: async (parent, args, context) => {
      const collectionUsers = await getCollection(connection, 'users')
        .catch((e) => {
          throw `Getting collection failed: ${e}`
        })

      const inserted  = await collectionUsers.insertOne(args)
      return inserted.ops[0]
    }
  },
}

export default resolvers