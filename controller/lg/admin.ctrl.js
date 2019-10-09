
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

module.exports = {create_user}