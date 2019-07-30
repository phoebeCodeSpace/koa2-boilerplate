import Validator from '../lib/Validator';

export default class UserValidator extends Validator {

  get getToken(){
    return {
      code: [
        { type: 'string', required: true, message: '请输入code'},
        { min: 3, max: 5, message: '长度在 3 到 5 个字符',},
      ]
    }
  }
}