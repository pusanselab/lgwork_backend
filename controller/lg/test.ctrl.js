var sequelize = require('sequelize');

const test = (req, res) => {
    // db.User.findAll().then(result => {
    //     return res.json(result).end()
    // }).catch(err => {
    //     return ErrForm(res, err)
    // })
    const result = {}

    db.Header.findAll({
        where : {
            test_step1: "기타"
        }
    }).then( header => {
        if(header.length == null){
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }else{
            console.log(header)
            result.content = header
            result.code = 200
            result.message = "success"
            console.log(result)
            return res.json(result)
        }
    })
}

const login = (req, res) => {
    const Id = req.body.user_id;
    const Pwd = req.body.user_pwd;

    // console.log(req.body.userId)
    // console.log(req.body.userPwd)
    console.log(req.body)
    const result = {};
    db.User.findOne({
        where : {
            id: Id
        }
    }).then( user => {
        if(user == null ){
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }else if(user.pwd === Pwd){
            result.code = 200
            result.message = "success"
            return res.json(result)
        }
        else{
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }
    })
}

const overview = (req, res) => {
    const result = {
        content : {
            model : [],
            test : []
        }
    };

    db.Header.findOne({
        where: {
            lgmv_model_filter1: 'Multi V H/P'
        },
        attributes: [
            [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi V H/P']
        ],
    }).then( counter => {
        console.log(counter.dataValues)
        result.content.model[0] = counter.dataValues

        db.Header.findOne({
            where: {
                lgmv_model_filter1: 'Multi V H/R'
            },
            attributes: [
                [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi V H/R']
            ],
        }).then( counter => {
            result.content.model[1] = counter.dataValues

            db.Header.findOne({
                where: {
                    lgmv_model_filter1: 'Multi V ARUM'
                },
                attributes: [
                    [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi V ARUM']
                ],
            }).then( counter => {
                result.content.model[2] = counter.dataValues

                db.Header.findOne({
                    where: {
                        lgmv_model_filter1: 'Multi Water'
                    },
                    attributes: [
                        [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi Water']
                    ],
                }).then( counter => {
                    result.content.model[3] = counter.dataValues

                    db.Header.findOne({
                        where: {
                            lgmv_model_filter1: 'Multi V S'
                        },
                        attributes: [
                            [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi V S']
                        ],
                    }).then( counter => {
                        result.content.model[4] = counter.dataValues

                        db.Header.findOne({
                            where: {
                                lgmv_model_filter1: 'Multi V M'
                            },
                            attributes: [
                                [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi V M']
                            ],
                        }).then( counter => {
                            result.content.model[5] = counter.dataValues

                            db.Header.findOne({
                                where: {
                                    lgmv_model_filter1: 'Multi V Space'
                                },
                                attributes: [
                                    [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Multi V Space']
                                ],
                            }).then( counter => {
                                result.content.model[6] = counter.dataValues

                                db.Header.findOne({
                                    where: {
                                        lgmv_model_filter1: 'GHP'
                                    },
                                    attributes: [
                                        [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'GHP']
                                    ],
                                }).then( counter => {
                                    result.content.model[7] = counter.dataValues

                                    db.Header.findOne({
                                        where: {
                                            lgmv_model_filter1: 'Chiller'
                                        },
                                        attributes: [
                                            [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Chiller']
                                        ],
                                    }).then( counter => {
                                        result.content.model[8] = counter.dataValues

                                        db.Header.findOne({
                                            where: {
                                                lgmv_model_filter1: 'Therma V'
                                            },
                                            attributes: [
                                                [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Therma V']
                                            ],
                                        }).then( counter => {
                                            result.content.model[9] = counter.dataValues

                                            db.Header.findOne({
                                                where: {
                                                    lgmv_model_filter1: 'Single Package'
                                                },
                                                attributes: [
                                                    [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Single Package']
                                                ],
                                            }).then( counter => {
                                                result.content.model[10] = counter.dataValues

                                                db.Header.findOne({
                                                    where: {
                                                        lgmv_model_filter1: 'Single&Multi'
                                                    },
                                                    attributes: [
                                                        [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Single&Multi']
                                                    ],
                                                }).then( counter => {
                                                    result.content.model[11] = counter.dataValues

                                                    db.Header.findOne({
                                                        where: {
                                                            lgmv_model_filter1: 'Refrigeration'
                                                        },
                                                        attributes: [
                                                            [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), 'Refrigeration']
                                                        ],
                                                    }).then( counter => {
                                                        result.content.model[12] = counter.dataValues

                                                        db.Header.findOne({
                                                            where: {
                                                                test_step1: '성능'
                                                            },
                                                            attributes: [
                                                                [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), '성능']
                                                            ],
                                                        }).then( counter => {
                                                            result.content.test[0] = counter.dataValues

                                                            db.Header.findOne({
                                                                where: {
                                                                    test_step1: '냉방성능'
                                                                },
                                                                attributes: [
                                                                    [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), '냉방성능']
                                                                ],
                                                            }).then( counter => {
                                                                result.content.test[1] = counter.dataValues

                                                                db.Header.findOne({
                                                                    where: {
                                                                        test_step1: '난방성능'
                                                                    },
                                                                    attributes: [
                                                                        [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), '난방성능']
                                                                    ],
                                                                }).then( counter => {
                                                                    result.content.test[2] = counter.dataValues

                                                                    db.Header.findOne({
                                                                        where: {
                                                                            test_step1: '안전성'
                                                                        },
                                                                        attributes: [
                                                                            [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), '안전성']
                                                                        ],
                                                                    }).then( counter => {
                                                                        result.content.test[3] = counter.dataValues

                                                                        db.Header.findOne({
                                                                            where: {
                                                                                test_step1: '신뢰성'
                                                                            },
                                                                            attributes: [
                                                                                [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), '신뢰성']
                                                                            ],
                                                                        }).then( counter => {
                                                                            result.content.test[4] = counter.dataValues

                                                                            db.Header.findOne({
                                                                                where: {
                                                                                    test_step1: '기타'
                                                                                },
                                                                                attributes: [
                                                                                    [sequelize.fn('count', sequelize.col('lgmv_model_filter1')), '기타']
                                                                                ],
                                                                            }).then( counter => {
                                                                                result.content.test[5] = counter.dataValues

                                                                                return res.json(result)
                                                                            })
                                                                        })
                                                                    })
                                                                })
                                                            })
                                                        })
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
}

const data_search_id = (req, res) => {
    const uid = req.body.header_uid;

    const result = {};

    db.Header.findOne({
        where : {
            header_uid: uid
        }
    }).then( header => {
        if(header == null){
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }else{
            console.log(header.dataValues)
            result.content = header.dataValues
            result.code = 200
            result.message = "success"
            return res.json(result)
        }
    })
}

const data_search = (req, res) => {
    const lgmv_model_filter1 = req.body.lgmv_model_filter1
    const lgmv_model_filter2 = req.body.lgmv_model_filter2
    const lgmv_model_name = req.body.lgmv_model_name
    const conn_tester = req.body.conn_tester
    const data_id = req.body.data_id
    const calorimeter_cap = req.body.calorimeter_cap
    const test_step1 = req.body.test_step1

    const result = {}
    const query = {}

    {query.lgmv_model_filter1 = lgmv_model_filter1}




    db.Header.findAll({
        where : {
            lgmv_model_filter1: model_filter1,
            lgmv_model_filter2: model_filter2,
            // lgmv_model_name: model_name,
            // conn_tester: tester,
            // calorimeter_cap: calorimeter_cap,
            // test_step1: test_step1
        }
    }).then( header => {
        console.log(header, "abc")
        if(header == null){
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }else{
            result.content = header
            result.code = 200
            result.message = "success"
            return res.json(result)
        }
    })
}

const data_search_detail = (req, res) => {
    const lgmv_serial_number = req.body.lgmv_serial_number;
    const calorimeter_id_wb = req.body.calorimeter_id_wb;
    const calorimeter_id_db = req.body.calorimeter_id_db;
    const calorimeter_od_wb = req.body.calorimeter_od_wb;
    const calorimeter_od_db = req.body.calorimeter_od_db;
    const conn_operation_rate = req.body.conn_operation_rate;
    const conn_testroom_number = req.body.conn_testroom_number;
    const test_step2 = req.body.test_step2;

    const header_uid = req.body.header_uid;

    const result = {
        content : {
            cooling_performance : {},
            header : {}
        },
        header :{},
        cooling_performance : {}
    };

    db.Header.findAll({
        where : {
            lgmv_serial_number: lgmv_serial_number,
            calorimeter_id_wb: calorimeter_id_wb,
            calorimeter_id_db: calorimeter_id_db,
            calorimeter_od_wb: calorimeter_od_wb,
            calorimeter_od_db: calorimeter_od_db,
            conn_operation_rate: conn_operation_rate,
            conn_testroom_number: conn_testroom_number,
            test_step2: test_step2
        }
    }).then( header => {
        console.log("header 값 : ", header)
        if(header.length == 0 ){
            result.header.code = 400
            result.header.message = "failure"
        }else{
            result.content.header = header
            result.header.code = 200
            result.header.message = "success"
        }
    }).then( db.Calolimeter.findAll({
        where : {
            header_uid: header_uid
        },
        order:[
         ['EER', 'DESC']
        ]
       //attributes: [sequelize.fn('MAX', 'EER'), 'EER']
    }).then( calorimeter => {
        if(calorimeter.length == 0 ){
            result.calorimeter.code = 400
            result.calorimeter.message = "failure"
            return res.json(result)
        }else{
            const index = calorimeter[0].dataValues.TXT_TIME;
            const EER = calorimeter[0].dataValues.EER

            result.content.cooling_performance.EER = EER

            db.Odu.findOne({
                where : {
                    header_uid : header_uid,
                    TXT_TIME : index
                },
                attributes : ["TXT_INV1_TARGETTING_N_TRACE", "TXT_INV2_TARGETTING_N_TRACE", "TXT_FAN1_TRACE", "TXT_FAN2_TRACE", "TXT_MAIN_EEV", "TXT_SUB_EEV"]
            }).then( odu => {
                const compressor_1 = odu.TXT_INV1_TARGETTING_N_TRACE
                const compressor_2 = odu.TXT_INV2_TARGETTING_N_TRACE
                const odu_fan_rpm1 = odu.TXT_FAN1_TRACE
                const odu_fan_rpm2 = odu.TXT_FAN2_TRACE
                const main_eev = odu.TXT_MAIN_EEV
                const sub_eev = odu.TXT_SUB_EEV

                result.content.cooling_performance.compressor_1 = compressor_1
                result.content.cooling_performance.compressor_2 = compressor_2
                result.content.cooling_performance.odu_fan_rpm1 = odu_fan_rpm1
                result.content.cooling_performance.odu_fan_rpm2 = odu_fan_rpm2
                result.content.cooling_performance.main_eev = main_eev
                result.content.cooling_performance.sub_eev = sub_eev

                db.Idu.findOne({
                    where : {
                        header_uid : header_uid,
                        TXT_TIME : index
                    },
                    attributes : ["TXT_IDU_WIND"]
                }).then( idu => {
                    const idu1_fan_rpm = idu.TXT_IDU_WIND

                    result.content.cooling_performance.idu1_fan_rpm = idu1_fan_rpm
                    result.cooling_performance.code = 200
                    result.cooling_performance.message = "success"
                    return res.json(result)

                })
            })
        }
    }))
}

module.exports = {test, login, overview,  data_search, data_search_id, data_search_detail}
