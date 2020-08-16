import mongodb from 'mongodb'
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
    },
    deleteUser: async (parent, args, context) => {
      const collectionUsers = await getCollection(connection, 'users')
        .catch((e) => {
          throw `Getting collection failed: ${e}`
        })

      const deleted  = await collectionUsers.findOneAndDelete({
        _id: new mongodb.ObjectID(args._id)
      })

      if (deleted.value !== null) {
        return deleted.value
      } else {
        console.log(`Deletion unsuccessful.`)
      }

    }
  },
}

export default resolvers