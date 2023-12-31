const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)


    const rows = await getStuff();
    console.log(JSON.stringify(getStuff))

app.get('/articles', async (req,res)=>{

})