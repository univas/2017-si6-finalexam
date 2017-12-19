const statusDB = require('../db/ordersDB.json')

module.exports = {
    getStatus (code) {
        let status = statusDB.find(status => status.code == code)
        if (status) {

                 code = status.code

            items = status.items.description

            price = status.items.price

        }
        return status
    }
}