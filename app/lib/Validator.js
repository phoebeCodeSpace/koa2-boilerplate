import Schema from 'async-validator'
import { last, forEach, find, compact, get} from 'loadsh'


export default class Validator {

  validate(ctx){
    const pathname = ctx.req._parsedUrl.pathname
    const name = last(pathname.split('/'))

    if (!this[name]){
      throw new Error(`you should add ${name} validator first`)
    }

    this.ctx = ctx
    this.rules = this[name]
    const validator = new Schema(this[name]);
    validator.validate(this.params, (errors, fields) => {
      if (errors) {
        let messages = []
        forEach(errors, (error) => {
          messages.push(error.message)
        })
        console.log(messages)
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
      get(this.data, ['body', key]),
      get(this.data, ['path', key]),
      get(this.data, ['header', key])
    ])

    return value[0] || ''
  }
}