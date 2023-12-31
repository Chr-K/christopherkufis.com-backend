const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)

app.get('/articles', async (req,res)=>{
    try{
        const rows = await getStuff()
        console.log(rows)
        res.send(rows)
    } 
    catch(err){
        console.error(err)
        res.status(500).send('beep boop')
    }

})