const express = require('express')
const app = express()
const path = require('path')
const PORT = 3005

//express 
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

//templates
app.set('views', path.join(__dirname, 'public'))
app.set('view engine', 'ejs')

app.get('/', (request, response) => {
    const data = { 
        order:null,
         submitted:false }
    response.render('index', data)

})

//MUDAR O PARAMENTRO ABAIXO PARA OQ PEDIR
app.get('/order', (request, response) => {
    const { getStatus } = require('./app/order')
    status = getStatus(request.query.order)


  const data = {
       order: status, submitted: true
    }

        response.render('index', data)
})

app.listen(PORT, () => { 
    console.log('Server is running on port ' + PORT)
})