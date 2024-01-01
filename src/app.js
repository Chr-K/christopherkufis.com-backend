const express = require('express')
const session = require('express-session')
const logger = require('morgan')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const auth = require('./auth')

var SQLiteStore = require('connect-sqlite3')(session);

auth.Authenticate()
app.use(bodyParser.json({ extended: true }));

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({db:'sessions.db',dir:'./var/db'})
}))
app.use('/',routes)
app.listen(3000)
