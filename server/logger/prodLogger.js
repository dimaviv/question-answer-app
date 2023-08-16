const {createLogger, format, transports} = require('winston');
const {combine, timestamp, colorize, printf, errors} = format;
const DailyRotateFile = require('winston-daily-rotate-file'); // Import the DailyRotateFile transport

function buildProdLogger() {
    const logFormat = printf(({level, message, timestamp, stack}) => {
        return `[${timestamp}] ${level}: ${stack || message}`;
    });

    const appLoggerTransports = [
        new transports.Console({
            format: combine(
                colorize(),
                logFormat
            ),
        }),
        new DailyRotateFile({ // Use DailyRotateFile transport
            filename: 'logs/app-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'info',
            format: combine(
                timestamp(),
                logFormat
            )
        }),
    ];

    const errorLoggerTransports = [
        new DailyRotateFile({ // Use DailyRotateFile transport
            filename: 'logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            format: combine(
                timestamp(),
                errors({stack: true}),
                logFormat
            )
        }),
    ];

    const appLogger = createLogger({
        format: combine(
            timestamp(),
        ),
        defaultMeta: {service: 'any'},
        transports: appLoggerTransports,
    });

    const errorLogger = createLogger({
        format: combine(
            timestamp(),
        ),
        defaultMeta: {service: 'any'},
        transports: errorLoggerTransports,
    });

    return {appLogger, errorLogger};
}

module.exports = buildProdLogger;
