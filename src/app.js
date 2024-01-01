const express = require('express')
const session = require('express-session')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))

app.use('/',routes)
app.listen(3000)
