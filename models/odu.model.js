module.exports = (Sequelize, sequelize) => {
    return sequelize.define('odu', {
            oduUid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            headerUid: {
                type: Sequelize.INTEGER
            },
            TXT_HIGH_PRESSURE_TARGETTING: {
                type: Sequelize.INTEGER,
            },
            TXT_HIGH_PRESSURE_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_TEMP_WEIGHTED_AVERAGE: {
                type: Sequelize.DOUBLE,
            },
            TXT_LOW_PRESSURE_TARGETTING: {
                type: Sequelize.INTEGER,
            },
            TXT_LOW_PRESSURE_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP_RATIO: {
                type: Sequelize.DOUBLE,
            },
            TXT_SH_TARGETTING: {
                type: Sequelize.DOUBLE,
            },
            TXT_SH_TRACE: {
                type: Sequelize.DOUBLE,
            },
            TXT_SC_TRACE: {
                type: Sequelize.DOUBLE,
            },
            TXT_SCSH_TARGETTING: {
                type: Sequelize.DOUBLE,
            },
            TXT_SCSH_TRACE: {
                type: Sequelize.DOUBLE,
            },
            TXT_ACCUM: {
                type: Sequelize.INTEGER,
            },
            TXT_4WAY: {
                type: Sequelize.INTEGER,
            },
            TXT_ACT_HEX_VAPOER_VALVE: {
                type: Sequelize.INTEGER,
            },
            TXT_EQ_VALVE: {
                type: Sequelize.INTEGER,
            },
            TXT_RECEIVER_IN: {
                type: Sequelize.INTEGER,
            },
            TXT_RECEIVER_OUT: {
                type: Sequelize.INTEGER,
            },
            TXT_VAPOR_INJECTION: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP1_OIL_LEVEL: {
                type: Sequelize.INTEGER,
            },
            TXT_COMP2_OIL_LEVEL: {
                type: Sequelize.INTEGER,
            },
            TXT_HEX_HIGH: {
                type: Sequelize.INTEGER,
            },
            TXT_HEX_LOW: {
                type: Sequelize.INTEGER,
            },
            TXT_INV_PREHEAT: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_PREHEAT: {
                type: Sequelize.INTEGER,
            },
            TXT_ACTIVE_OIL1: {
                type: Sequelize.INTEGER,
            },
            TXT_ACTIVE_OIL2: {
                type: Sequelize.INTEGER,
            },
            TXT_ODU_DRY_CONTACT: {
                type: Sequelize.INTEGER,
            },
            TXT_SNOW_DEEP: {
                type: Sequelize.INTEGER,
            },
            TXT_INV1_TARGETTING_N_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_TARGETTING_N_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN1_TARGETTING: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN1_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN2_TARGETTING: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN2_TRACE: {
                type: Sequelize.INTEGER,
            },
            TXT_MAIN_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_SUB_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_SC_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_DVI_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_VI_EEV1: {
                type: Sequelize.INTEGER,
            },
            TXT_VI_EEV2: {
                type: Sequelize.INTEGER,
            },
            TXT_AIR_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SUCTION_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_CONDENSING_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_EVAPORATING_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_INV1_DISCHARGE_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_INV2_DISCHARGE_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HEAT_EXCHANGER_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HEAT_EXCHANGER_UP_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HEAT_EXCHANGER_DOWN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SC_PIPE_IN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SC_PIPE_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SC_PIPE_LIQUID_PIPE_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_DVI_IN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_DVI_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_INV1_IPM_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_INV2_IPM_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_FAN_HEATSINK_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_FAN2_HEATSINK_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_OUT_HUMIDITY: {
                type: Sequelize.INTEGER,
            },
            TXT_NOISE_LEVEL: {
                type: Sequelize.INTEGER,
            },
            TXT_INV1_INPUT_Current: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_INPUT_Current: {
                type: Sequelize.INTEGER,
            },
            TXT_INV1_INPUT_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_INPUT_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV1_FREQUENCY_INPUT_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_FREQUENCY_INPUT_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV1_UP_CURRENT: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_UP_CURRENT: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN1_UP_CURRENT: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN2_UP_CURRENT: {
                type: Sequelize.INTEGER,
            },
            TXT_FAN_DC_LINK_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV1_DC_LINK_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INV2_DC_LINK_VOLTAGE: {
                type: Sequelize.INTEGER,
            },
            TXT_INSTANT_POWER_CONSUMPTION: {
                type: Sequelize.INTEGER,
            },
            TXT_ACCRUE_POWER_CONSUMPTION: {
                type: Sequelize.INTEGER,
            },
            TXT_INFO_DRIVING_MODE: {
                type: Sequelize.INTEGER,
            },
            TXT_INFO_ERROR_NUMBER: {
                type: Sequelize.INTEGER,
            },
            TXT_INFO_ERROR_UNIT: {
                type: Sequelize.INTEGER,
            },
            TXT_INFO_PRODUCT_TYPE: {
                type: Sequelize.STRING,
            },
            TXT_INFO_VERSION: {
                type: Sequelize.STRING,
            },
            TXT_INFO_EXT_VERSION: {
                type: Sequelize.STRING,
            },
            TXT_INFO_EEPROM: {
                type: Sequelize.STRING,
            },
            TXT_INFO_COMP_VERSION: {
                type: Sequelize.STRING,
            },
            TXT_INFO_FAN_VERSION: {
                type: Sequelize.STRING,
            },
            TXT_INFO_DISTRIBUTOR: {
                type: Sequelize.STRING,
            },
            TXT_INFO_INSTALLER: {
                type: Sequelize.STRING,
            },
            TXT_INFO_SITENAME: {
                type: Sequelize.STRING,
            },
            TXT_INFO_MODEL_INFO: {
                type: Sequelize.STRING,
            },
            TXT_OVERLOAD: {
                type: Sequelize.INTEGER,
            },
            TXT_LIMIT_CT: {
                type: Sequelize.INTEGER,
            },
            TXT_LIMIT_TEMP: {
                type: Sequelize.INTEGER,
            },
            TXT_LIMIT_VT: {
                type: Sequelize.INTEGER,
            },
            TXT_INFO_LGMV_VERSION: {
                type: Sequelize.STRING,
            }
        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
