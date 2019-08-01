import Schema from 'async-validator'
import { last, forEach, find, compact, get } from 'loadsh'
import { HttpException } from '../exception/httpException';
import ERROR_CODE_SYSTEM from '../common/errorCodeSystem'
const { PARAMETER_ERROR } = ERROR_CODE_SYSTEM


export default class Validator {

  async validate(ctx) {
    const pathname = ctx.req._parsedUrl.pathname
    const name = last(pathname.split('/'))

    if (!this[name]) {
      throw new Error(`you should add ${name} validator first`)
    }

    this.ctx = ctx
    this.request = ctx.request
    this.rules = this[name]

    const validator = new Schema(this[name]);
    await validator.validate(this.params, (errors, fields) => {
      if (errors) {
        let messages = []
        forEach(errors, (error) => {
          messages.push(error.message)
        })
        throw new HttpException(PARAMETER_ERROR, messages[0])
      }
    });

    return this.params
  }

  get params() {
    const params = {}
    forEach(this.rules, (rules, fields) => {
      params[fields] = this._getParams(fields)
    })
    // console.log(params)
    return params
  }

  _getParams(key) {
    const value = compact([
      get(this.request, ['query', key]),
      get(this.request, ['body', key]),
      get(this.request, ['path', key]),
      get(this.request, ['header', key])
    ])
    // console.log(value)
    return value[0] || ''
  }
}