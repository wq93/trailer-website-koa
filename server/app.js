const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')

app.use(logger())

app.use(async (ctx, next) => {
  ctx.body = 'hello word'
})

app.listen(2333, () => {
  console.log('node is running...')
})