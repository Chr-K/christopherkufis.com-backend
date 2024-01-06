const express = require('express')
const session = require('express-session')
const app = express()
const routes = require('./routes')
const auth = require('./auth')
const passport = require('passport')
const MySQLStore = require('express-mysql-session')(session);
const connection = require('./Models/db').connection;
const cors = require('cors')


const sessionStore = new MySQLStore({
    expiration:3600000,
    createDatabaseTable:true,
    schema:{
        tableName:'sessions',
        columnNames:{
            session_id:'session_id',
            expires:'expires',
            data:'data'
        }
    }
},connection)

app.use(express.json())


app.set('trust proxy',1)

app.use(cors({
    origin:'https://cp.christopherkufis.com',
    credentials:true,
}))
app.options('/submitarticle',cors())
app.use(session({
    secret:'keyboard cat',
    resave: true,
    saveUninitialized: true,
    store:sessionStore,
    cookie:{
        domain:'christopherkufis.com',
        maxAge:1000*60*60*24*7,
        secure:true,
        sameSite:'none',
    }
}))
app.use(passport.session())



auth.Authenticate()
app.use('/',routes)

app.listen(3000)
