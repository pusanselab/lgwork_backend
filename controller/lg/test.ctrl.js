var sequelize = require('sequelize');

const test = (req, res) => {
    db.User.findAll().then(result => {
        return res.json(result).end()
    }).catch(err => {
        return ErrForm(res, err)
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
    const model_filter1 = req.body.lgmv_model_filter1;
    const model_filter2 = req.body.lgmv_model_filter2;
    const model_name = req.body.lgmv_model_name;
    const tester = req.body.conn_tester;
    const data_id = req.body.data_id;
    const calorimeter_cap = req.body.calorimeter_cap;
    const test_step1 = req.body.test_step1;

    const result = {};

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
            calorimeter : {},
            header : {}
        },
        code : {},
        message : {}
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
            result.code = 400
            result.message = "failure"
        }else{
            result.content.header = header
            result.code = 200
            result.message = "success"
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
        console.log("반환 값 : ", calorimeter)
        if(calorimeter.length == 0 ){
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }else{
            result.content.calorimeter = calorimeter[0]
            result.code = 200
            result.message = "success"
            return res.json(result)
        }
    }))
}

module.exports = {test, login, data_search, data_search_id, data_search_detail}
