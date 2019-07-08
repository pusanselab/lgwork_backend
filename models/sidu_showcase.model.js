module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Sidu_showcase', {
            sidu_showcase_uid: {
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
            TXT_SIDU_SHOWCASE_TYPE: {
                type: Sequelize.STRING,
            },
            TXT_SIDU_SHOWCASE_OPER_STATE: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_SHOWCASE_OPER_DEFROST: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_SHOWCASE_OPER_REFRIGERATION: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_SHOWCASE_TROUBLE_DEFROSTING: {
                type: Sequelize.INTEGER,
            },
            TXT_IDU_CENTRAL_CONTROL_ADDRESS: {
                type: Sequelize.DOUBLE,
            },
            TXT_AIR_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_SHOWCASE_DEFROST_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_IDU_PIPE_IN_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_IDU_PIPE_OUT_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_CASECADE_EEV: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_CASECADE_ERROR: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_SHOWCASE_TARGET_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_SHOWCASE_THERMO_GAP_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SH_TARGETTING: {
                type: Sequelize.DOUBLE,
            }

        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
