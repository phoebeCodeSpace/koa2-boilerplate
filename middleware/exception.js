import { env } from '../config/index'
import { HttpException } from '../app/exception/httpException';

export const exception = app => {
  app.use(async(ctx, next)=>{
    try {
      await next()
    } catch (error) {
      const isDev = env === 'development' 
      const isHttpException = error instanceof HttpException


      if (isHttpException) {
        ctx.body = {
          data: error.data,
          message: error.message,
          code: error.code,
          request: `${ctx.method} ${ctx.path}`,
        }
        ctx.status = error.statusCode
      } else {
        ctx.body = {
          data: null,
          message: isDev ? '【dev:system error】'+ error.message : "未知错误！",
          code: 9999,
          request: `${ctx.method} ${ctx.path}`
        }
        ctx.status = 500
      }
    }
  })
}