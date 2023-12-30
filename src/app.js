const express = require('express')
const fetchArticles = require('./Controllers/articleCont')
const dotenv = require('dotenv')
dotenv.config();

const port = process.env.PORT
const app = express()

app.use(express.json())

app.get('/articles',async (req,res)=>{
await fetchArticles();
res.send('articles_fetched');
})

app.listen(port)