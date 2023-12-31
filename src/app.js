const express = require('express')
const getStuff = require('./Models/db')
const app = express()


app.use(getStuff)

app.listen(3000)

app.get('/articles', async (req,res)=>{
const stuff = things.getStuff()
res.send(stuff)
})