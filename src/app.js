const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()

app.get('/hakuna', (req,res)=>{
    res.send(<p>Hakuna</p>)
    console.log("Hakuna matata")
})

