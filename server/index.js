require('dotenv').config()
const express = require('express')
const sequelize = require('./db')
const cors = require('cors')
const path = require('path')
const swaggerSpecs = require('./swagger')
const swaggerUi = require("swagger-ui-express");
require('./passport.js');
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleware')
const loggerMiddleware = require('./middleware/LoggerMiddleware')

const PORT = process.env.PORT || 5000

const app = express()

// Logs middleware
app.use(loggerMiddleware)

app.use(cors())
app.use(express.static(path.resolve(__dirname, 'static')))
app.use(express.static(path.resolve(__dirname, '../client/build')))
app.use(express.json())


app.use(fileUpload({}))
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api', router)


app.get("*", (req, res) => {
    try {
        res.sendFile(path.join(__dirname, '../client', 'build', 'index.html'));
    } catch (error) {
        console.error('Error sending file:', error);
        // Handle the error as needed
        res.status(500).send('Build not found');
    }
});

// Обработка ошибок, последний Middleware
app.use(errorHandler)


const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}
start()