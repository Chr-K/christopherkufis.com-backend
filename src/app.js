const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)


    const rows =  getStuff();
    console.log(JSON.stringify(rows))

app.get('/articles', async (req,res)=>{

})