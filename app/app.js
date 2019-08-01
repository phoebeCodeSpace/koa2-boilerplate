import { join } from 'path';
import Koa from 'koa'
import { forEach } from 'loadsh'
import { port } from '../config'

// 遍历使用中间件
const useMiddlewares = (app) => {
  const MIDDLEWARES = ['base', 'exception', 'router']

  forEach(MIDDLEWARES, (filename) => {
    const path = join(__dirname, `../middleware/${filename}`)
    const middlewares = require(path)
    forEach(middlewares, (middleware) => {
      if (middleware instanceof Function) {
        middleware(app)
      }
    })
  })
}

const start = async () => {
  const app = new Koa()
  await useMiddlewares(app)
  app.listen(port);
}

start()