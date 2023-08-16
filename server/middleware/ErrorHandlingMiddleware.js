const ApiError = require('../error/ApiError')
const logger = require('../logger/index')

// don't delete `next`
module.exports = function (err, req, res, next) {
    if (err instanceof ApiError) {
        logger.errorLogger.error(`Error Stack Trace: ${err.stack}`); // Log the error stack trace
        return res.status(err.status).json({message: err.message, errors: err.errors})
    }
    logger.errorLogger.error(`Error Stack Trace: ${err.stack}`); // Log the error stack trace
    return res.status(500).json({message: "Unexpected error!"})
}