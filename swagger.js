const swaggerJsdoc = require('swagger-jsdoc');
require('swagger-ui-express');
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'My API',
            version: '1.0.0',
            description: 'A sample API',
        },
        servers: [
            {
                url: 'http://localhost:5000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API docs

};

const specs = swaggerJsdoc(options);

module.exports = specs;