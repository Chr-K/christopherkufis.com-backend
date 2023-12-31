const express = require('express')
const getStuff = require('./Models/articleMod')
const session = require('express-session')
const path = require('path')
const app = express()

app.use(session({
    secret:'secret',
    resave: true,
    saveUninitialized: true
}))


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
    return 0;
})
app.post('/auth',async (req,res)=>{
    try {

    }
    catch(err){

    }
})