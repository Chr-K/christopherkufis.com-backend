const express = require('express')
const getStuff = require('./Models/db')
const app = express()

app.listen(3000)

app.get('/articles', async (req,res)=>{
    try {
        const rows = await getStuff();
        res.send(JSON.stringify(rows));
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
})