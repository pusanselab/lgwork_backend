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
    Hru: require('./hru.model')(Sequelize, sequelize),
    Calorimeter: require('./calorimeter.model')(Sequelize, sequelize),
    Sidu_whu: require('./sidu_whu.model')(Sequelize, sequelize),
    Sidu_cascade: require('./sidu_cascade.model')(Sequelize, sequelize),
    Sidu_showcase: require('./sidu_showcase.model')(Sequelize, sequelize),
    Sidu_awhp: require('./sidu_awhp.model')(Sequelize, sequelize),
    Sidu_fau: require('./sidu_fau.model')(Sequelize, sequelize),
    Sidu_dxc: require('./sidu_dxc.model')(Sequelize, sequelize),
}


// ODU
db.Header.hasMany(db.Odu, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Odu.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// IDU
db.Header.hasMany(db.Idu, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Idu.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Calorimeter
db.Header.hasMany(db.Calorimeter, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Calorimeter.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})
db.Calorimeter.belongsTo(db.Odu, {foreignKey: 'TXT_TIME', constraints: false, targetKey: 'TXT_TIME'})
db.Calorimeter.belongsTo(db.Idu, {foreignKey: 'TXT_TIME', constraints: false, targetKey: 'TXT_TIME'})

// Hru
db.Header.hasMany(db.Hru, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Hru.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Sidu_whu
db.Header.hasMany(db.Sidu_whu, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Sidu_whu.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Sidu_cascade
db.Header.hasMany(db.Sidu_cascade, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Sidu_cascade.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Sidu_showcase
db.Header.hasMany(db.Sidu_showcase, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Sidu_showcase.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Sidu_awhp
db.Header.hasMany(db.Sidu_awhp, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Sidu_awhp.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Sidu_fau
db.Header.hasMany(db.Sidu_fau, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Sidu_fau.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})

// Sidu_dxc
db.Header.hasMany(db.Sidu_dxc, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid', onDelete: 'cascade'})
db.Sidu_dxc.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid', onDelete: 'cascade'})



module.exports = db;
