const express = require('express')
const router = express.Router()
const articleController = require('./Controllers/articleCont')

router.get('/articles', articleController.getArticles)

module.exports = router