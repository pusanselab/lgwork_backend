const Sequelize = require('sequelize')


const isTest = process.env.NODE_ENV === 'test'
const host = (!isTest) ? '164.125.70.12' : '164.125.70.12'

const database = (!isTest) ? 'lg_work' : 'lg_work'

const sequelize = new Sequelize(
    database,
    'lg',
    'selab',
    {
        host: host,
        dialect: 'mysql',
        // logging: !isTest, // default는 console.log와 binding
        dialectOptions: {
            // useUTC: false, //for reading from database
            // dateStrings: true,
            // typeCast: true
        },
        timezone: '+09:00' //for writing to database
    }
)

const db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User: require('./user.model')(Sequelize, sequelize),
    Header: require('./header.model')(Sequelize, sequelize),
    Idu: require('./idu.model')(Sequelize, sequelize),
    Odu: require('./odu.model')(Sequelize, sequelize),
}


// ODU
db.Header.hasMany(db.Odu, {foreignKey: 'headerUid', constraints: false, sourceKey: 'headerUid'})
db.Odu.belongsTo(db.Header, {foreignKey: 'headerUid', constraints: false, targetKey: 'headerUid'})

// IDU
db.Header.hasMany(db.Idu, {foreignKey: 'headerUid', constraints: false, sourceKey: 'headerUid'})
db.Idu.belongsTo(db.Header, {foreignKey: 'headerUid', constraints: false, targetKey: 'headerUid'})



module.exports = db;
