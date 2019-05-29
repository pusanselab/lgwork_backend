const Sequelize = require('sequelize')

const host = '164.125.70.12'
const database = 'lg_work'

const sequelize = new Sequelize(
    database,
    'lg',
    'selab',
    {
        host: host,
        dialect: 'mysql',
        dialectOptions: {
            useUTC: false, //for reading from database
            dateStrings: true,
            typeCast: true
        },
        timezone: '+09:00' //for writing to database
    }
)

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: require('./user.model')(Sequelize, sequelize),
}

module.exports = db;