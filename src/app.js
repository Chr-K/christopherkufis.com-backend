import express from 'express'
import fetchArticles from './Controllers/articleCont'
require('dotenv').config()
const port = process.env.PORT
const app = express()

app.use(express.json())

app.get('/articles',async (req,res)=>{
await fetchArticles();
res.send();
})

app.listen(port)