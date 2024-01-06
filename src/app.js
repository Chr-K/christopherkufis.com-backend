const express = require('express')
const session = require('express-session')
const app = express()
const routes = require('./routes')
const bodyParser = require('body-parser')
const auth = require('./auth')
const passport = require('passport')
const MySQLStore = require('express-mysql-session')(session);
const connection = require('./Models/db').connection;

const sessionStore = new MySQLStore({
    expiration:3600000,
    createDatabaseTable:true,
    schema:{
        columnNames:{
            tableName:'sessions',
            session_id:'session_id',
            expires:'expires',
            data:'data'
        }
    }
},connection)



app.use(bodyParser.json({ extended: true }));

app.set('trust proxy',1)


app.use(session({
    secret:'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store:sessionStore
}))
app.use(passport.session())

auth.Authenticate()

app.use('/',routes)

app.listen(3000)
