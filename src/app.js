const express = require('express')
require('dotenv').config({path:'../.env'})
const getStuff = require('./Models/db')
const app = express()
const port = process.env.PORT

app.listen(port,()=>{
    console.log(port)
})
app.get('/',async (req,res)=>{
const stuff = await getStuff()
console.log(stuff)
})

