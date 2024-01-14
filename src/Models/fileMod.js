const multer = require('multer')
const fs = require('fs')
require('dotenv').config({path:'../.env'})

const path = process.env.ARTICLE_IMAGE_PATH


async function generateFileNames(req,res){
    const files = fs.readdir(path,(err,files)=>{
        if(err){
            console.error('Bad Directory',err)
            res.status(400);
        }
        console.log(files)
    })
    res.status(200).json(files)
}

module.exports = {
    generateFileNames
}