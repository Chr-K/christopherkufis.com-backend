const fs = require('fs')
const multer = require('multer')
require('dotenv').config({path:'../.env'})

const path = process.env.ARTICLE_IMAGE_PATH


async function uploadImage(req,res){

}

module.exports = {
    uploadImage
}