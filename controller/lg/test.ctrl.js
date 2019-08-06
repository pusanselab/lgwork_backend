const test = (req, res) => {
    db.User.findAll().then(result => {
        return res.json(result).end()
    }).catch(err => {
        return ErrForm(res, err)
    })
}

const login = (req, res) => {
    const Id = req.body.id;
    const Pwd = req.body.pwd;

    const result = {};
    db.User.findOne({
        where : {
            id: Id
        }
    }).then( user => {
        console.log(Pwd)
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
module.exports = {test, login}

//test
