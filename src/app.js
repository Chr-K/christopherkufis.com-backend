const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)

app.get('/articles',async (req,res)=>{
    const stuff = await getStuff();
    res.send('stuff')
})