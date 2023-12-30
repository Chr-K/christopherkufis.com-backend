const dotenv = require('dotenv')
const express = require('express')
const fetchArticles = require('./Controllers/articleCont').default
dotenv.config({path:'../.env'})

const port = process.env.PORT
const app = express()

app.use(express.json())

app.get('/articles',async (req,res)=>{

    try{
        const articles = await fetchArticles();
        res.json({articles})
    }
    catch(error){
        console.error(error)
        res.status(500).json({error: "internal service error"})
    }


})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})