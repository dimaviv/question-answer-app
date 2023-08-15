const {format, createLogger, transports} = require('winston')
const {timestamp, combine, printf, errors, json} = format;
const DailyRotateFile = require('winston-daily-rotate-file');

function buildProdLogger() {
    const logFormat = printf(({level, message, timestamp, stack}) => {
        return `[${timestamp}] ${level}: ${stack || message}`;
    });

    const transportsList = [
        // Console transport for real-time monitoring
        new transports.Console({
            format: combine(
                json(),
                format.colorize(),
                errors({stack: true}),
                logFormat
            ),
        }),
        // File transport for info and warning logs
        new DailyRotateFile({
            filename: 'logs/app-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'info',
            format: combine(
                timestamp(),
                errors({stack: true}),
                json()
            )
        }),
        // File transport for error logs
        new DailyRotateFile({
            filename: 'logs/error-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'error',
            format: combine(
                timestamp(),
                errors({stack: true}),
                json()
            )
        }),
    ];

    return createLogger({
        format: combine(
            timestamp(),
            errors({stack: true}),
            json()
        ),
        defaultMeta: {service: 'any'},
        transports: transportsList,
    });
}


module.exports = buildProdLogger;