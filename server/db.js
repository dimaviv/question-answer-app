const {Sequelize} = require('sequelize')


let sequelize;
console.log('Node environment: ', process.env.NODE_ENV)

if (process.env.NODE_ENV === "development") {
    sequelize = new Sequelize(
        process.env.POSTGRES_DATABASE,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: process.env.POSTGRES_PORT,
            logging: false
        }
    )
} else {
    sequelize = new Sequelize(
        process.env.POSTGRES_DATABASE,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        {
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: process.env.POSTGRES_PORT,
            // ssl: true,
            // dialectOptions: {
            //     ssl: {
            //         rejectUnauthorized: false
            //     }
            // }

        })
}


module.exports = sequelize


