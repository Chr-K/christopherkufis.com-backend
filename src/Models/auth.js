var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var crypto = require('crypto')

async function Authenticate(user,req){
    console.log(user)
    passport.use(new LocalStrategy(function verify(user,password,cb){
        console.log(user)
        crypto.pbkdf2(password,row.salt,310000,32,'sha256',function(err,hashedPassword){
            if(err){return cb(err)}
            if(!crypto.timingSafeEqual(row.hassedPassword,hashedPassword)){
                return cb(null,fall,{message:'incorrect login info'})
            }
            return cb(null,row)
        })
    }))
}


module.exports={
    Authenticate,
}