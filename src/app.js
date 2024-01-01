const express = require('express')
const session = require('express-session')
const logger = require('morgan')
const passport = require('passport');
const SQLiteStore = require('connect-sqlite3')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const auth = require('./auth')

auth.Authenticate()

app.use(bodyParser.json({ extended: true }));

app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({db:'sessions.db',dir:'./var/db'})
}))
app.use(passport.authenticate('session'))
app.use('/',routes)
app.listen(3000)
