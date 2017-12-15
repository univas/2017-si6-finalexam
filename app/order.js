const orderDB = require('../db/ordersDB.json')

module.exports = {
    getStatus (order) {
        let status = orderDB.find(status => status.code == order)
        if (status) {


            items = order.items

            description = items.description
            
            price = items.price

            description = description.items.description
            
            price = price.items.price
        }
        
        return status
    }
}