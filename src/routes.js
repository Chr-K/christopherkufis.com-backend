const express = require('express')
const passport = require('passport')
const router = express.Router()
const articleController = require('./Controllers/articleCont')
router.get('/articles', articleController.getArticles)
router.post('/auth',passport.authenticate('local',{
successRedirect:'https://cp.christopherkufis.com/home',
failureRedirect:'https://cp.christopherkufis.com/'
}))
module.exports = router