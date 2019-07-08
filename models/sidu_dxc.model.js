module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Sidu_dxc', {
            sidu_dxc_uid: {
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
            TXT_SIDU_OA_TEMP: {
                type: Sequelize.DOUBLE
            },
            TXT_SIDU_RA_TEMP: {
                type: Sequelize.DOUBLE,
            },
            TXT_SIDU_DXC_AIRCON: {
                type: Sequelize.INTEGER
            },
            TXT_SIDU_DXC_VENT: {
                type: Sequelize.INTEGER
            },

        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
