import Koa from 'koa'
import { port } from '../config'
import requireDirectory from 'require-directory'
import path from 'path'
import { forEach } from 'loadsh'

// 遍历使用中间件
const useMiddlewares = (app) => {
  const middlewares = path.join(__dirname,'../middleware')
  requireDirectory(module, middlewares, {
    visit: (obj) => {
      forEach(obj, (middleware)=> {
        if (middleware instanceof Function){
          middleware(app)
        }
      })
    }
  })
}

const start = async () => {
  const app = new Koa()
  await useMiddlewares(app)
  app.listen(port);
}

start()