const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()

app.listen('api.christopherkufis.com')

app.get('/', (req,res)=>{
    res.send('hi')
    
})

