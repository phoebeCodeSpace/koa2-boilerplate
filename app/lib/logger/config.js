import path from 'path'

export const LOG_LEVELS = {
  levels: {
    error: 0,
    warn: 1,
    info: 4,
    debug: 5
  },
  colors: {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'grey'
  }
}

export const TRANSPORT_OPTS = {
  common: {
    timeFormat: {
      format: 'YYYY-MM-DD HH:MM:SS'
    }
  },
  console: {
    level: 'debug'
  },
  file: {
    level: 'error',
    file: path.join(__dirname, '../../../logs'),
    maxsize: 5242880 // 5MB = 1024 * 5
  }
}
