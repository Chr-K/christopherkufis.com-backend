const multer = require('multer')
require('dotenv').config({path:'../.env'})

const imagePath = process.env.ARTICLE_IMAGE_PATH

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,imagePath)
    },
    filename:(req,file,cb)=>{
        console.log(file.mimetype)
        const name = Date.now().toString() + file.mimetype
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