const Koa = require('koa')
const app = new Koa()
const logger = require('koa-logger')
const session = require('koa-session')
app.keys = ['Hi wq']
app.use(logger())
app.use(session(app))

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') return
  let n = ctx.session.views || 0
  ctx.session.views = ++n
  ctx.body = n + 'views'

})

app.listen(2333, () => {
  console.log('node is running...')
})