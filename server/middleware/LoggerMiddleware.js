const expressWinston = require('express-winston');
const logger = require('../logger/index');

// Configure express-winston middleware for request logs
const requestLoggerMiddleware = expressWinston.logger({
    winstonInstance: logger.appLogger,
    meta: true, // Include request metadata
    msg: 'HTTP {{req.method}} {{req.url}}',
});

// Middleware for logging actions and errors
module.exports = function (req, res, next) {
    // Log the incoming request using express-winston
    requestLoggerMiddleware(req, res, () => {
        // Override the default `res.send` function to capture the response status
        const originalSend = res.send;
        res.send = (body) => {
            logger.appLogger.info(`[${req.method}] ${req.url} - Status: ${res.statusCode}`);
            originalSend.call(res, body);
        };

        // Handle errors
        const originalError = res.json;
        res.json = (body) => {
            if (res.statusCode >= 400) {
                if (logger.appLogger !== logger.errorLogger) {
                    logger.errorLogger.error(`[${req.method}] ${req.url} - Status: ${res.statusCode}`);
                }
                logger.appLogger.error(`[${req.method}] ${req.url} - Status: ${res.statusCode}`);

                if (body && body.error) {
                    logger.errorLogger.error(`Error Message: ${body.error.message}`);
                }
            }
            originalError.call(res, body);
        };

        next();
    });
};
