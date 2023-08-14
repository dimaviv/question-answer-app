const {format, createLogger, transports} = require('winston')
const {timestamp, combine, printf, errors, json} = format;


function buildProdLogger() {
    return createLogger({
        format: combine(
            timestamp(),
            errors({stack: true}),
            json(),
        ),
        defaultMeta: {service: 'any'},
        transports: [
            new transports.Console()
        ],
    });

}


module.exports = buildProdLogger;