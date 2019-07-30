const router = require('koa-router')()
const requireDirectory = require('require-directory')
const { forEach } = require('loadsh')

const path = require('path')
const apiDirectory = path.join(__dirname, '../app/controller')

export const routerMap = []

export const routerMiddle = app => {
  
  requireDirectory(module, apiDirectory)

  forEach(routerMap, (routerItem) => {
    const { target, method, path, callback} = routerItem
    const apiPath = target.prefix + path
    router[method](apiPath, callback)
  })


  app.use(router.routes(), router.allowedMethods())

}
