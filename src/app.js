const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()

app.listen(3030,()=>{
    console.log("listening")
})

app.get('/', (req,res)=>{
    res.send("Hakuna matata")
    console.log("Hakuna matata")
})

