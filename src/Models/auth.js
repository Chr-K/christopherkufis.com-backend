var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var crypto = require('crypto')

async function Authenticate(user,req){
    console.log("USER:"+ user + "\n req" + req.body)
}

module.exports={
    Authenticate,
}