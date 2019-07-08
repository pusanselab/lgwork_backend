module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Idu', {
            iduUid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            headerUid: {
                type: Sequelize.INTEGER
            },
            TXT_IDU_CAPACITY: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_MODE: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_WIND: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_EEV: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_AIR_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_IDU_PIPE_IN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_IDU_PIPE_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_IDU_COMMUNICATION: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_CENTRAL_CONTROL_ADDRESS: {
                type: Sequelize.STRING,
            },
            TXT_IDU_ERROR_NUMBER: {
                type: Sequelize.INTEGER,
            },
            TXT_OUT_HUMIDITY: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_LOCK: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_SCSH_TGT: {
                type: Sequelize.DOUBLE,
            },
            TXT_IDU_SCSH_TGT2: {
                type: Sequelize.DOUBLE,
            }

        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
