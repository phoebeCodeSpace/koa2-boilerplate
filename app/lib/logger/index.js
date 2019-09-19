import { Container, createLogger, addColors, transports, format } from 'winston'
import { LOG_LEVELS, TRANSPORT_OPTS } from './config'

const { combine, label, colorize, timestamp, printf } = format
const { timeFormat } = TRANSPORT_OPTS.common

class Logger {
  constructor () {
    // this.container = new Container()
    this.logConsole = null
    this.logFile = null
    this.createConsoleLogger()
    this.createFileLogger()
  }

  createConsoleLogger () {
    const { level } = TRANSPORT_OPTS.console
    this.logConsole = createLogger({
      level,
      levels: LOG_LEVELS.levels,
      transports: [
        new transports.Console()
      ],
      format: combine(
        colorize({
          all: true
        }),
        timestamp(timeFormat),
        printf(this._formatter)
      )
    })
    addColors(LOG_LEVELS.colors)
  }

  createFileLogger () {
    const { level, file, maxsize } = TRANSPORT_OPTS.file
    this.logFile = createLogger({
      level,
      levels: LOG_LEVELS.levels,
      transports: [
        new transports.File({
          filename: `${file}/logfile.log`,
          maxsize
        })
      ],
      format: combine(
        timestamp(timeFormat),
        printf(this._formatter)
      )
    })
  }

  logTo (method) {
    return (message) => {
      this._logToConsole(method, message)
      this._logToFile(method, message)
    }
  }

  _logToConsole (method, message) {
    this.logConsole[method](message)
  }

  _logToFile (method, message) {
    this.logFile[method](message)
  }

  _formatter ({ timestamp, level, message }) {
    return `${timestamp} [${level}]: ${message}`
  }
}

const logger = new Logger()

export default {
  error: logger.logTo('error'),
  warn: logger.logTo('warn'),
  info: logger.logTo('info'),
  debug: logger.logTo('debug'),
  log: (level) => logger.logTo(level)
}
