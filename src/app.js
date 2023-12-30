const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)

app.get('/', (req,res)=>{
    res.send('hi')
})

