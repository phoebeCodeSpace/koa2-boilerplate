export class HttpException extends Error {
  constructor(error = { message: '系统错误', code: 10000 }, statusCode = 200) {
    super()
    this.data = null
    this.code = error.code
    this.message = error.message
    this.statusCode = statusCode
  }
}

export class Success extends HttpException {
  constructor(data) {
    super()
    this.code = 0
    this.statusCode = 200
    this.message = 'success'
    this.data = data
  }
}