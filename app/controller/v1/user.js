import { Controller, Post } from '../../utils/router.decorator'

@Controller('/v1/user')
class User {

  @Post('/getToken')
  async getToken(ctx){
    ctx.body = 'getToken'
  }
}

module.exports = User
