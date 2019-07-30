import { Controller, Get } from '../../utils/router.decorator'

@Controller('/v1/home')
class Home {
  @Get('/getList')
  async getList(ctx) {
    ctx.body = '123'
  }
}

module.exports = Home