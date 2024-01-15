const multer = require('multer')
const mime = require('mime')
require('dotenv').config({path:'../.env'})

const imagePath = process.env.ARTICLE_IMAGE_PATH

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,imagePath)
    },
    filename:(req,file,cb)=>{
        console.log(mime.extension(file.mimetype))
        const name = Date.now().toString() + '.' +mime.extension(file.mimetype)
        console.log(name)
        cb(null,name)
    }
})
const upload = multer({storage:storage})



async function uploadImage(req,res){
    if(req.file.mimetype.startsWith('image/')){
        res.status(200).json(req.file.filename)
    }
    else{
        res.status(400).json('test2')
    }
}

module.exports = {
    uploadImage,
    upload
}