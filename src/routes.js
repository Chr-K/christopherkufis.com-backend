const express = require('express')
const passport = require('passport')
const router = express.Router()
const articleController = require('./Controllers/articleCont')
const fileController = require('./Controllers/fileCont')
const upload = require('./Models/fileMod').upload




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

router.post('/logout',(req,res,next)=>{
    req.logout(function(err){
        if(err){return next(err)}
        res.status(200).json({message:"You are now logged out"})
    })
})

router.post('/loggedin',(req,res,next)=>{
    if(req.isAuthenticated()){
        res.status(200).json('is logged in')
    }
    else{
        res.status(401).json('is not logged in')
    }
})



router.post('/submitarticle',(req,res,next)=>{    
    if(req.isAuthenticated()){
        articleController.createArticle(req,res)
        res.status(200).json('is logged in')
    }
    else{
        res.status(401).json('is not logged in')
    }
})

router.post('/imageupload',upload.single('image'),(req,res,next)=>{
    if(req.isAuthenticated()){
        fileController.uploadImage(req,res)
    }
})



router.delete('/delete-article',(req,res,next)=>{
    if(req.isAuthenticated()){
        articleController.deleteArticle(req,res)
        res.status(200).json('delete success')
    }
    else{
        res.status(401).json('unauthorized attempt')
    }
})

module.exports = router