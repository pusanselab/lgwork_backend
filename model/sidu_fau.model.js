module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Sidu_fau', {
            sidu_fau_uid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            header_uid: {
                type: Sequelize.INTEGER
            },
            section_count: {
                type: Sequelize.INTEGER
            },
            TXT_TIME: {
                type: Sequelize.STRING
            },
            TXT_SIDU_NUMBER: {
                type: Sequelize.INTEGER,
            },
            TXT_SIDU_SUCTION_TEMP: {
                type: Sequelize.DOUBLE
            },

        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
