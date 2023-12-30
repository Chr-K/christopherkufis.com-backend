const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()

app.get('/', (req,res)=>{
    res.send("Hakunae matata")
    console.log("Hakuna matata")
})

