import { Controller, Get } from '../../utils/router.decorator'
import { handleResult } from '../../utils/helper';

@Controller('/v2/user')
class User {

  @Get('/getToken')
  getToken(ctx){
    handleResult()
  }
}

module.exports = User
