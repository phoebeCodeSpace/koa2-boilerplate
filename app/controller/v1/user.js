import { Controller, Post, Get } from '../../utils/router.decorator'
import UserValidator from '../../validator/UserValidator';

const $validator = new UserValidator()
/**
 * 类中this的指向问题
 * https://cnodejs.org/topic/58ff1076523b9d0956dad9df
 */

@Controller('/v1/user')
class User {

  @Get('/getToken')
  getToken(ctx){
    $validator.validate(ctx);
    ctx.body = 'getToken'
  }
}

module.exports = User
