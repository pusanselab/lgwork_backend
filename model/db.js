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
    Calolimeter: require('./calolimeter.model')(Sequelize, sequelize),
    Sidu_whu: require('./sidu_whu.model')(Sequelize, sequelize),
    Sidu_cascade: require('./sidu_cascade.model')(Sequelize, sequelize),
    Sidu_showcase: require('./sidu_showcase.model')(Sequelize, sequelize),
    Sidu_awhp: require('./sidu_awhp.model')(Sequelize, sequelize),
    Sidu_fau: require('./sidu_fau.model')(Sequelize, sequelize),
    Sidu_dxc: require('./sidu_dxc.model')(Sequelize, sequelize),
}


// ODU
db.Header.hasMany(db.Odu, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Odu.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// IDU
db.Header.hasMany(db.Idu, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Idu.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Calolimeter
db.Header.hasMany(db.Calolimeter, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Calolimeter.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Hru
db.Header.hasMany(db.Hru, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Hru.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Sidu_whu
db.Header.hasMany(db.Sidu_whu, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Sidu_whu.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Sidu_cascade
db.Header.hasMany(db.Sidu_cascade, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Sidu_cascade.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Sidu_showcase
db.Header.hasMany(db.Sidu_showcase, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Sidu_showcase.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Sidu_awhp
db.Header.hasMany(db.Sidu_awhp, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Sidu_awhp.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Sidu_fau
db.Header.hasMany(db.Sidu_fau, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Sidu_fau.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})

// Sidu_dxc
db.Header.hasMany(db.Sidu_dxc, {foreignKey: 'header_uid', constraints: false, sourceKey: 'header_uid'})
db.Sidu_dxc.belongsTo(db.Header, {foreignKey: 'header_uid', constraints: false, targetKey: 'header_uid'})



module.exports = db;
