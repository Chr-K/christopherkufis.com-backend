const express = require('express')
const session = require('express-session')
const path = require('path')
const app = express()
const routes = require('./routes')

app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))

app.use('/',routes)
app.listen(3000)
