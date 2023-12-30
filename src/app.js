const express = require('express')
const { connection } = require('./Models/db')
require('dotenv').config({path:'../.env'})
const app = express()
const port = process.env.PORT


app.get('/',(req,res)=>{
    res.send(connection)
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})

