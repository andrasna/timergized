const Koa = require('koa')
const Router = require('koa-router')
const { open, getCollection } = require('./db')
const app = new Koa()
const PORT = 3000
const router = new Router()
const connection = open()

router.get('/', async (ctx) => {
  const collectionTodos = await getCollection(connection, 'todos')
    .catch((e) => {
      throw `Getting collection failed: ${e}`
    })

  const listOfTodos = await collectionTodos.find().toArray()
    .catch((e) => { 
      throw `Getting list failed: ${e}`
    })

  ctx.body = listOfTodos[0]
})

app.use(router.routes())

app.listen(PORT)
