var express = require('express')
var passport = require('passport')
var LocalStrategy = require('passport-local')
var crypto = require('crypto')

async function Authenticate(user,req){
    console.log("USER:"+ user[ID] + "\n req: " + req.body['USERNAME'])
}

module.exports={
    Authenticate,
}