const logger = require('../logger/index')


// Middleware for logging actions and errors
module.exports = function (req, res, next) {
    // Log the incoming request
    logger.info(`[${req.method}] ${req.url}`);

    // Override the default `res.send` function to capture the response status
    const originalSend = res.send;
    res.send = (body) => {
        logger.info(`[${req.method}] ${req.url} - Status: ${res.statusCode}`);
        originalSend.call(res, body);
    };

    // Handle errors
    const originalError = res.json;
    res.json = (body) => {
        if (res.statusCode >= 400) {
            logger.error(`[${req.method}] ${req.url} - Status: ${res.statusCode}`);
            if (body && body.error) {
                logger.error(`Error Message: ${body.error.message}`);
            }
        }
        originalError.call(res, body);
    };

    next();
}

