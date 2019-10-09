
const create_user = (req, res) => {
    console.log(req.body)
    const result = {}
    db.User.findOne({
        where: {
            id : req.body.id
        }
    }).then(user => {
        if(!user) {
            db.User.create(req.body).then(user => {
                return res.json(user).end()
            })
        }
        if(user) {
            result.status = 400
            result.message = "id 중복"
            return res.json(result).end()
        }
    })

}

const delete_header_data = (req, res) => {
    const first_date = '2019-01-03'
    const end_date  = '2019-01-05'
    db.Header.findAll().then(headers => {
        for(var i=0; i<headers.length; i++) {
            var header_date = headers[i].lgmv_date.substring(0,10)
            console.log(header_date)
            if(first_date < header_date) {
                if(header_date < end_date) {
                    db.Header.destroy({
                        where: {
                            header_uid: headers[i].header_uid
                        }
                    }).then(resu => {
                        return res.json(resu).end()
                    })
                }
            }

        }
    })

}

module.exports = {create_user, delete_header_data}