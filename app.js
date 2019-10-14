
const db = require('./models/db')

const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')

const employeeController = require('./controllers/employeeController')

const app = express()
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json())
app.set('views', path.join(__dirname,'/views/'))
app.engine('hbs', exphbs({ etxname:'hbs', defaultLayout:'mainLayout', layoutDir: __dirname + '/views/layouts/'}))
app.set('view engine', 'hbs')

app.listen(8080, () => {
    console.log("Express server started at port no 8080")
})

app.use('/employee', employeeController)