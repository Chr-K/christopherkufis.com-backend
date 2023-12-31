const express = require('express')
const router = express.Router()
const articleController = require('./Controllers/articleCont')

router.get('/articles', async (req,res)=>{
    try{
        const articles = await articleController.getArticles()
        res.send(articles)
    }
    catch(err){
        console.error(err)
    }
})

module.exports = router