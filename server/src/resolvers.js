import { open, getCollection } from './db.js'
const connection = open()

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

export default resolvers