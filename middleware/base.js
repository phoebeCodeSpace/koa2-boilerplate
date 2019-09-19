import { join } from 'path';
import bodyParser from 'koa-bodyparser'
import koaStatic from 'koa-static'
import logger from '../app/lib/logger'

export const addBodyParser = app => {
  app.use(bodyParser({
    enableTypes: ['json', 'form', 'text']
  }))
}

export const addKoaStatic = app => {
  const staticPath = '../static'
  app.use(koaStatic(join(__dirname, staticPath)))
}

export const addLogger = app => {
  app.context.logger = logger
}
