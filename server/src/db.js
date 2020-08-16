import MongoClient from 'mongodb'
const url = 'mongodb://localhost:27017'
const dbName = 'timergized'

const open = () => {
  return MongoClient.connect(url, { useUnifiedTopology: true })
}

const getCollection = (connection, collection) => {
  return connection.then((client) => {
    return client.db(dbName).collection(collection)
  }, (error) => {
    console.error(error)
  })
}

export { open, getCollection }