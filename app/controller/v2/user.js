import { Controller, Get } from '../../utils/router.decorator'

@Controller('/v2/user')
class User {

  @Get('/getToken')
  getToken(ctx){
    ctx.body = 'getToken'
  }
}

module.exports = User
