const test = (req, res) => {
    db.User.findAll().then(result => {
        return res.json(result).end()
    }).catch(err => {
        return ErrForm(res, err)
    })
}

const login = (req, res) => {
    const Id = req.body.userId;
    const Pwd = req.body.userPwd;

    // console.log(req.body.userId)
    // console.log(req.body.userPwd)
    console.log(req.body)
    const result = {};
    db.User.findOne({
        where : {
            id: Id
        }
    }).then( user => {
        if(user.pwd === Pwd){
            result.code = 200
            result.message = "success"
            return res.json(result)
        }else{
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }
    })
}

const data_search_id = (req, res) => {
    const uid = req.body.header_uid;

    console.log(req.body)
    const result = {};
    db.Header.findOne({
        where : {
            header_uid: uid
        }
    }).then( header => {
        return res.json(header)
    })
}

const data_search = (req, res) => {
    const model_filter1 = req.body.lgmv_model_filter1;
    const model_filter2 = req.body.lgmv_model_filter2;
    const model_name = req.body.lgmv_model_name;

    // console.log(req.body)
    console.log(req.body)
    const result = {};
    db.Header.findAll({
        where : {
            id: Id
        }
    }).then( header => {
        if(user.pwd === Pwd){
            result.code = 200
            result.message = "success"
            return res.json(result)
        }else{
            result.code = 400
            result.message = "failure"
            return res.json(result)
        }
    })
}

module.exports = {test, login, data_search, data_search_id}
