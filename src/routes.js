const express = require('express')
const passport = require('passport')
const router = express.Router()
const articleController = require('./Controllers/articleCont')
router.get('/articles', articleController.getArticles)
router.get('/article',articleController)
router.post('/auth',(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err){return next(err)}
        if(!user){
            return res.status(401).json({Message:"Authentication has failed"})
        }

        return res.status(200).json({message:"Welcome"})
    })(req,res,next)
})
module.exports = router