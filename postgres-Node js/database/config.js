const Sequelize= require('sequelize')
const config=require('./connection_strings').local;

const sequelize= new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect:'postgres',
        pool: {
            max: 100,
            min: 0,
            idle: 10000,
            acquire: 10000,
        },
        logging: false,
    }
)

sequelize.sync({
    force:false
})

module.exports=sequelize;