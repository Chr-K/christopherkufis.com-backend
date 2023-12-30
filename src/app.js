const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()

app.listen('localhost')


app.get('/hakuna', (req,res)=>{
console.log("Hello")
})

