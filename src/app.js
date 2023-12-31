const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)

app.get('/articles',(req,res)=>{
    const stuff = getStuff();
    res.send('stuff')
})