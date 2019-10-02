module.exports = (Sequelize, sequelize) => {
    return sequelize.define('Calolimeter', {
            calolimeter_uid: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            header_uid: {
                type: Sequelize.INTEGER
            },
            TXT_TIME: {
                type: Sequelize.STRING
            },
            Capacity: {
                type: Sequelize.INTEGER,
            },
            EER: {
                type: Sequelize.DOUBLE,
            },
            Power: {
                type: Sequelize.INTEGER,
            },
            Current: {
                type: Sequelize.INTEGER,
            },
            Voltage: {
                type: Sequelize.INTEGER,
            },
            Power_Factor: {
                type: Sequelize.INTEGER,
            },
            Power_Frequency: {
                type: Sequelize.INTEGER,
            },
            Capacity_Ratio: {
                type: Sequelize.DOUBLE,
            },
            EER_Ratio: {
                type: Sequelize.DOUBLE,
            },
            Power_Ratio: {
                type: Sequelize.DOUBLE,
            },
            Current_Ratio: {
                type: Sequelize.DOUBLE,
            },
            Air_Flow: {
                type: Sequelize.DOUBLE,
            },
            ID_Entering_DB: {
                type: Sequelize.DOUBLE,
            },
            ID_Entering_WB: {
                type: Sequelize.DOUBLE,
            },
            ID_Leaving_DB: {
                type: Sequelize.DOUBLE,
            },
            ID_Leaving_WB: {
                type: Sequelize.DOUBLE,
            },
            OD_Entering_DB: {
                type: Sequelize.DOUBLE,
            },
            OD_Entering_WB: {
                type: Sequelize.DOUBLE,
            },
            Enthalpy_Entering: {
                type: Sequelize.DOUBLE,
            },
            Enthalpy_Leaving: {
                type: Sequelize.DOUBLE,
            },
            Abs_Humidity_Entering: {
                type: Sequelize.DOUBLE,
            },
            Abs_Humidity_Leaving: {
                type: Sequelize.DOUBLE,
            },
            Specific_Heat_Leaving: {
                type: Sequelize.DOUBLE,
            },
            Specific_Volume_Leaving: {
                type: Sequelize.DOUBLE,
            },
            Heat_Leakage: {
                type: Sequelize.INTEGER,
            },
            Condensate_Weight: {
                type: Sequelize.DOUBLE,
            },
            Latent_Capacity: {
                type: Sequelize.INTEGER,
            },
            Sensible_Capacity: {
                type: Sequelize.INTEGER,
            },
            Sensible_Heat_Ratio: {
                type: Sequelize.DOUBLE,
            },
            Static_Pressure: {
                type: Sequelize.INTEGER,
            },
            Nozzle_Diff: {
                type: Sequelize.INTEGER,
            },
            Barometric_Pressure: {
                type: Sequelize.INTEGER,
            },
            TC_1: {
                type: Sequelize.DOUBLE,
            },
            TC_2: {
                type: Sequelize.DOUBLE,
            },
            TC_3: {
                type: Sequelize.DOUBLE,
            },
            TC_4: {
                type: Sequelize.DOUBLE,
            },
            TC_5: {
                type: Sequelize.DOUBLE,
            },
            TC_6: {
                type: Sequelize.DOUBLE,
            },
            TC_7: {
                type: Sequelize.DOUBLE,
            },
            TC_8: {
                type: Sequelize.DOUBLE,
            },
            TC_9: {
                type: Sequelize.DOUBLE,
            },
            TC_10: {
                type: Sequelize.DOUBLE,
            },
            TC_11: {
                type: Sequelize.DOUBLE,
            },
            TC_12: {
                type: Sequelize.DOUBLE,
            },
            TC_13: {
                type: Sequelize.DOUBLE,
            },
            TC_14: {
                type: Sequelize.DOUBLE,
            },
            TC_15: {
                type: Sequelize.DOUBLE,
            },
            TC_16: {
                type: Sequelize.DOUBLE,
            },
            TC_17: {
                type: Sequelize.DOUBLE,
            },
            TC_18: {
                type: Sequelize.DOUBLE,
            },
            TC_19: {
                type: Sequelize.DOUBLE,
            },
            TC_20: {
                type: Sequelize.DOUBLE,
            },
            TC_21: {
                type: Sequelize.DOUBLE,
            },
            TC_22: {
                type: Sequelize.DOUBLE,
            },
            TC_23: {
                type: Sequelize.DOUBLE,
            },
            TC_24: {
                type: Sequelize.DOUBLE,
            },
            TC_25: {
                type: Sequelize.DOUBLE,
            },
            TC_26: {
                type: Sequelize.DOUBLE,
            },
            TC_27: {
                type: Sequelize.DOUBLE,
            },
            TC_28: {
                type: Sequelize.DOUBLE,
            },
            TC_29: {
                type: Sequelize.DOUBLE,
            },
            TC_30: {
                type: Sequelize.DOUBLE,
            },
            TC_31: {
                type: Sequelize.DOUBLE,
            },
            TC_32: {
                type: Sequelize.DOUBLE,
            },
            TC_33: {
                type: Sequelize.DOUBLE,
            },
            TC_34: {
                type: Sequelize.DOUBLE,
            },
            TC_35: {
                type: Sequelize.DOUBLE,
            },
            TC_36: {
                type: Sequelize.DOUBLE,
            },
            TC_37: {
                type: Sequelize.DOUBLE,
            },
            TC_38: {
                type: Sequelize.DOUBLE,
            },
            TC_39: {
                type: Sequelize.DOUBLE,
            },
            TC_40: {
                type: Sequelize.DOUBLE,
            },
            TC_41: {
                type: Sequelize.DOUBLE,
            },
            TC_42: {
                type: Sequelize.DOUBLE,
            },
            TC_43: {
                type: Sequelize.DOUBLE,
            },
            TC_44: {
                type: Sequelize.DOUBLE,
            },
            TC_45: {
                type: Sequelize.DOUBLE,
            },
            TC_46: {
                type: Sequelize.DOUBLE,
            },
            TC_47: {
                type: Sequelize.DOUBLE,
            },
            TC_48: {
                type: Sequelize.DOUBLE,
            },
            TC_49: {
                type: Sequelize.DOUBLE,
            },
            TC_50: {
                type: Sequelize.DOUBLE,
            },
            TC_51: {
                type: Sequelize.DOUBLE,
            },
            TC_52: {
                type: Sequelize.DOUBLE,
            },
            TC_53: {
                type: Sequelize.DOUBLE,
            },
            TC_54: {
                type: Sequelize.DOUBLE,
            },
            TC_55: {
                type: Sequelize.DOUBLE,
            },
            TC_56: {
                type: Sequelize.DOUBLE,
            },
            TC_57: {
                type: Sequelize.DOUBLE,
            },
            TC_58: {
                type: Sequelize.DOUBLE,
            },
            TC_59: {
                type: Sequelize.DOUBLE,
            },
            TC_60: {
                type: Sequelize.DOUBLE,
            },
            DischargeR3: {
                type: Sequelize.DOUBLE,
            }
        }, {
            freezeTableName: true,
            timestamps: false
        },
    )
}
