const {Sequelize} = require('sequelize')


let sequelize;
console.log('Node environment: ', process.env.NODE_ENV)
console.log('Connection string: ', process.env.DATABASE_URL)

if (process.env.NODE_ENV === "production"){
    sequelize = new Sequelize(process.env.DATABASE_URL,{
        dialect:'postgres',
        ssl: true,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }

    })
}else{
    sequelize = new Sequelize(
        process.env.POSTGRES_DATABASE,
        process.env.POSTGRES_USER,
        process.env.POSTGRES_PASSWORD,
        {
            dialect:'postgres',
            host:process.env.POSTGRES_HOST,
            port:process.env.POSTGRES_PORT
        }
    )
}



module.exports = sequelize


