const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)

app.get('/',async (req,res)=>{
    res.send(await getStuff())
})

