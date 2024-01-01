const express = require('express')
const router = express.Router()
const articleController = require('./Controllers/articleCont')
const adminController = require('./Controllers/adminCont')
router.get('/articles', articleController.getArticles)
router.post('/auth',adminController.Login)
module.exports = router