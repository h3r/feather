const jsonServer = require('json-server')
const auth = require('json-server-auth-username')
const server = jsonServer.create()
const router = jsonServer.router('data/db.json')
const middlewares = jsonServer.defaults({
  noCors: false,
})

server.db = router.db

const rules = auth.rewriter({
  // Permission rules
  // users: 600,
  // messages: 640
})

// You must apply the middlewares in the following order
server.use(rules)
server.use(auth)
server.use(middlewares)
server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})
