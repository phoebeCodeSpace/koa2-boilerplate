import Schema from 'async-validator'
import { last, forEach, find, compact, get} from 'loadsh'
import { HttpException } from '../exception/httpException';
import errorCode from '../../app/common/errorCode'
const { PARAMETER_ERROR } = errorCode


export default class Validator {

  async validate(ctx){
    const pathname = ctx.req._parsedUrl.pathname
    const name = last(pathname.split('/'))

    if (!this[name]){
      throw new Error(`you should add ${name} validator first`)
    }

    this.ctx = ctx
    this.rules = this[name]
    const validator = new Schema(this[name]);
    await validator.validate(this.params, (errors, fields) => {
      if (errors) {
        let messages = []
        forEach(errors, (error) => {
          messages.push(error.message)
        })
        throw new HttpException({
          ...PARAMETER_ERROR,
          message: messages[0]
        })
      }
    });
  }

  get params (){
    const params = {}
    forEach(this.rules, (rules, fields)=>{
      params[fields] = this._getParams(fields)
    })
    // console.log(params)
    return params
  }

  _getParams(key){
    const value = compact([
      get(this.ctx, ['query', key]),
      get(this.ctx, ['body', key]),
      get(this.ctx, ['path', key]),
      get(this.ctx, ['header', key])
    ])

    return value[0] || ''
  }
}