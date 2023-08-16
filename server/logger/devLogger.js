const {format, createLogger, transports} = require('winston')
const {timestamp, combine, printf, colorize, errors} = format;


function buildDevLogger() {

    const logFormat = printf(({level, message, timestamp, stack}) => {
        return `${timestamp} ${level}: ${stack || message}`;
    });


    const appLogger = createLogger({
        format: combine(
            colorize(),
            timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
            errors({stack: true}),
            logFormat
        ),
        transports: [
            new transports.Console()
        ],
    });
    const errorLogger = appLogger;

    return {appLogger, errorLogger};
}


module.exports = buildDevLogger;