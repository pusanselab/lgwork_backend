module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Sidu_casecade', {
            sidu_casecade_uid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            header_uid: {
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
            TXT_SIDU_TEMP_GAP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_CASECADE_ERROR: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_HEATER: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_HEAT_SHINK_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_CASECADE_HIGH_PRESSURE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_CASECADE_LOW_PRESSURE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_DISCHARGE_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_CASECADE_INPUT_CURRENT: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP1_UP_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP1_UP_CURRENT: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP1_TARGETTING: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP1_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_CASECADE_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_4WAY: {
                type: Sequelize.INTEGER,
            },
            TXT_HOTGAS: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_FAN_HEATSINK: {
                type: Sequelize.INTEGER,
            },
            TXT_SUMP_HEATER: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_FCU: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_FLOW_SW: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_SUCTION_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HOT_WATER_STORAGE_TANK_HEATER: {
                type: Sequelize.INTEGER,
            },


        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
