const express = require('express')
const session = require('express-session')
const logger = require('morgan')
var passport = require('passport');
const SQLiteStore = require('connect-sqlite3')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const auth = require('./auth')

auth.Authenticate()

app.use(bodyParser.json({ extended: true }));


app.use(passport.authenticate('session'))
app.use('/',routes)
app.listen(3000)
