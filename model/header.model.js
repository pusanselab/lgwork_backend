module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Header',{
            header_uid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            lgmv_date : {
                type: Sequelize.STRING,
            },
            lgmv_model_name: {
                type: Sequelize.STRING,
                nullable: false
            },
            lgmv_serial_number: {
                type: Sequelize.STRING
            },
            lgmv_model_filter1: {
                type: Sequelize.STRING
            },
            lgmv_model_filter2: {
                type: Sequelize.STRING
            },
            lgmv_r: {
                type: Sequelize.STRING
            },
            lgmv_main_ver: {
                type: Sequelize.STRING
            },
            lgmv_eep_ver: {
                type: Sequelize.STRING
            },
            calorimeter_cap: {
                type: Sequelize.DOUBLE
            },
            calorimeter_power: {
                type: Sequelize.DOUBLE
            },
            calorimeter_eer: {
                type: Sequelize.DOUBLE
            },
            calorimeter_power_vol: {
                type: Sequelize.DOUBLE
            },
            calorimeter_id_wb: {
                type: Sequelize.DOUBLE
            },
            calorimeter_id_db: {
                type: Sequelize.DOUBLE
            },
            calorimeter_od_db: {
                type: Sequelize.DOUBLE
            },
            calorimeter_od_wb: {
                type: Sequelize.DOUBLE
            },
            idu_chassis: {
                type: Sequelize.STRING
            },
            odu_chassis: {
                type: Sequelize.STRING
            },
            plm_step1: {
                type: Sequelize.STRING
            },
            plm_step2: {
                type: Sequelize.STRING
            },
            test_step1: {
                type: Sequelize.STRING
            },
            test_step2: {
                type: Sequelize.STRING
            },
            conn_tester: {
                type: Sequelize.STRING
            },
            conn_testroom_number: {
                type: Sequelize.INTEGER
            },
            conn_pipe_type: {
                type: Sequelize.STRING
            },
            conn_test_result: {
                type: Sequelize.STRING
            },
            conn_memo: {
                type: Sequelize.STRING
            },
            lgmv_unit_temp: {
                type: Sequelize.STRING
            },
            lgmv_unit_press: {
                type: Sequelize.STRING
            },
            lgmv_unit_flux: {
                type: Sequelize.STRING
            },
        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
