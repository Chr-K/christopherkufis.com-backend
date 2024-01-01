const express = require('express')
const passport = require('passport')
const router = express.Router()
const articleController = require('./Controllers/articleCont')
router.get('/articles', articleController.getArticles)
router.post('/auth',passport.authenticate('local',{
successRedirect:'https://cp.christopherkufis.com/home',
failureRedirect:'https://cp.christopherkufis.com/'
}), function(req,res){
    res.redirect('/home')
})
module.exports = router