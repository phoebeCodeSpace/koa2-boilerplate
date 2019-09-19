import { Controller, Post, Get } from '../../utils/router.decorator'
import UserValidator from '../../validator/UserValidator';
import { handleResult } from '../../utils/helper';

const $validator = new UserValidator()

@Controller('/v1/user')
class User {

  @Get('/getToken')
  async getToken(ctx){
    const parmas = await $validator.validate(ctx);
    ctx.logger.info('获取token')
    const code = parmas.code
    handleResult(code)
  }
}

module.exports = User
