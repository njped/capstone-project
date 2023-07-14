const winston = require('winston')

const logger = winston.createLogger({
  level: 'silly',
  format: winston.format.json(),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: 'logfile.log'})
  ]
})

logger.log('info', 'This is an informational message');
logger.log('error', 'An error occurred');
