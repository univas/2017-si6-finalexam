const express = require('express')
const app = express()
const path = require('path')
const PORT = 3005

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const data = {
        items: null,
        submitted: false 
    }
    response.render('index', data)
})

app.get('/consult', (request, response) => {
    const { getStatus } = require('./app/orders')
    status = getStatus(request.query.orderId)
    
    const data = {
        items: status,
        submitted: true
    }

    response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})