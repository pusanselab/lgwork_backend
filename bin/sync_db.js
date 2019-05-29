const models = require('../model/db')

module.exports = () => {
    return models.sequelize.sync({force: false})
}