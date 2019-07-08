module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Sidu_awhp', {
            sidu_awhp_uid: {
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

        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
