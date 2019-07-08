module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Hru', {
            hru_uid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            header_uid: {
                type: Sequelize.INTEGER
            },
            TXT_HRU_NUMBER: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_VERSION: {
                type: Sequelize.STRING,
            },
            TXT_HRU_PIPE1_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE2_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE3_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE4_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE5_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE6_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE7_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE8_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_LIQUID_PIPE_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HRU_PIPE_IN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HRU_PIPE_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_HRU_SEARCHED_IDU: {
                type: Sequelize.INTEGER
            },
            TXT_HRU_SET_IDU: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_PIPE_SEARCH_END: {
                type: Sequelize.STRING,
            },
            TXT_HRU_PIPE_SEARCH_ENABLE: {
                type: Sequelize.STRING,
            },
            TXT_HRU_SCEEV1: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV1: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV2: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV3: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV4: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV5: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV6: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV7: {
                type: Sequelize.INTEGER,
            },
            TXT_HRU_MID_EEV8: {
                type: Sequelize.INTEGER,
            }


        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
