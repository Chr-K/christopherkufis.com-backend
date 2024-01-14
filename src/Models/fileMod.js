const fs = require('fs')
const multer = require('multer')
require('dotenv').config({path:'../.env'})

const path = process.env.ARTICLE_IMAGE_PATH
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path)
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now())
    }
})

const upload = storage({storage:storage})

async function uploadImage(req,res){
console.log(req.file.mimetype)
}

module.exports = {
    uploadImage
}