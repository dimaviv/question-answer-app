const {Sequelize} = require('sequelize')


let sequelize;
console.log('Node environment: ',process.env.NODE_ENV)
console.log('Connection string: ',process.env.HEROKU_POSTGRESQL_NAVY)
if (process.env.NODE_ENV === "production"){
    sequelize = new Sequelize(process.env.HEROKU_POSTGRESQL_NAVY,{
        dialect:'postgres'
    })
}else{
    sequelize = new Sequelize(
        process.env.PG_DATABASE,
        process.env.PG_USER,
        process.env.PG_PASSWORD,
        {
            dialect:'postgres',
            host:process.env.PG_HOST,
            port:process.env.PG_PORT
        }
    )
}



module.exports = sequelize


