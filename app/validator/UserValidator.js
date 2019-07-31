import Validator from '../lib/Validator';

export default class UserValidator extends Validator {

  get getToken(){
    return {
      code: [
        { type: 'string', required: true, message: '请输入必要参数code'}
      ]
    }
  }
}