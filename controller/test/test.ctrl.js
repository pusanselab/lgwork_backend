const test = (req, res) => {
    db.User.findAll().then(result => {
        return res.json(result).end()
    }).catch(err => {
        return ErrForm(res, err)
    })
}

module.exports = {test}
