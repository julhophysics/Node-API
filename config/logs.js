const winston = require('winston')
const { combine, timestamp, printf, colorize, align } = winston.format

const logger = winston.createLogger({
    level: 'info',
    format: combine(
        colorize({ all: true }),
        timestamp({
            format: 'YYYY-MM-DD hh:mm:ss',
        }),
        align(),
        printf((info) => `[${info.timestamp}] ${info.level}:${info.message}`)
    ),
    transports: [
        new winston.transports.File({
            filename: 'Logs/combined.log',
        }),
        new winston.transports.File({
            filename: 'Logs/app-error.log',
            level: 'error',
        }),
        new winston.transports.Console(),
    ],
})

module.exports = logger
