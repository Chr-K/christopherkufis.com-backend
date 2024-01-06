const express = require('express')
const session = require('express-session')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const auth = require('./auth')
const passport = require('passport')
var SQLiteStore = require('connect-sqlite3')(session);

app.use(bodyParser.json({ extended: true }));

app.set('trust proxy',1)


app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store: new SQLiteStore({db:'sessions.db',dir:'./var/db'})
}))

app.use(passport.authenticate('session'))

app.use(passport.initialize())
app.use(passport.session())

auth.Authenticate()

app.use('/',routes)

app.listen(3000)
