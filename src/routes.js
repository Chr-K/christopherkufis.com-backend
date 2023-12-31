const express = require('express')
const router = express.Router()
const articleController = require('./Controllers/articleCont')

router.get('/articles', async (req,res)=>{articleController.getArticles})

module.exports = router