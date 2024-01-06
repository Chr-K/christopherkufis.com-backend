const express = require('express')
const passport = require('passport')
const router = express.Router()
const articleController = require('./Controllers/articleCont')

router.get('/articles', articleController.getArticles)

router.post('/article',(req,res,next)=>{
    articleController.getArticle(req,res)
})



router.post('/auth',(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err){return next(err)}
        if(!user){
            return res.status(401).json({Message:"Authentication has failed"})
        }
        req.login(user,(err)=>{
            if(err){return next(err)}
            return(res.status(200).json({message:"Welcome"}))
        })
    })(req,res,next)
})

router.post('/submitarticle',(req,res,next)=>{
    console.log(req.session.id)
    
    if(req.isAuthenticated()){
        res.status(200).json('is logged in')
    }
    else{
        res.status(401).json('is not logged in')
    }
})
module.exports = router