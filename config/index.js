const { merge } = require('loadsh')
const development = require('./development')
const production = require('./production')

const env = process.env.NODE_ENV || 'development';

const envConfig = {
  'development': development,
  'production': production
}

const base = {
  port: 3000,
  env,
  security: {
    secretKey: "abcdefg",
    expiresIn: 60 * 60
  },
  wx: {
    appId: 'wx71522dc357d67c43',
    appSecret: '8606f9aaba9e24121e04b465bf882b02',
    loginUrl: 'https://api.weixin.qq.com/sns/jscode2session?appid=%s&secret=%s&js_code=%s&grant_type=authorization_code'
  }
}

module.exports = merge(base, envConfig[env])
