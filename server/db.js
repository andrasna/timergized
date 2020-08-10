const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'dontforget'

exports.open = () => {
  return MongoClient.connect(url, { useUnifiedTopology: true })
}

exports.getCollection = (connection, collection) => {
  return connection.then((client) => {
    return client.db(dbName).collection(collection)
  }, (error) => {
    console.error(error)
  })
}
