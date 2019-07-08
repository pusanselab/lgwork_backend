module.exports = (Sequelize, sequelize) => {
    return sequelize.define('siduWhu', {
            siduWhuUid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            headerUid: {
                type: Sequelize.INTEGER
            },
            TXT_SIDU_NUMBER: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_TEMP_CHOICE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_AIR_OUT_TEMP_TARGETTING: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_HEAT_WATER_ACTIVE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_HEAT_WATER_TEMP_TARGETTING: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_WATER_PUMP: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_HEATER_WATER_MODE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_HEAT_WATER_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_WATER_IN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_WATER_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_TEMP_GAP_TGT: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_TEMP_GAP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_HEATER: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_HEATER_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_RELAY1: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_RELAY2: {
                type: Sequelize.INTEGER,
            }

        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
