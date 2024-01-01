const express = require('express')
const passport = require('passport')
const router = express.Router()
const articleController = require('./Controllers/articleCont')
router.get('/articles', articleController.getArticles)
router.post('/auth',passport.authenticate('local',{
successRedirect:'https://cp.christopherkufis.com/home',
}), function(req,res){
    console.log('sleep')
})
module.exports = router