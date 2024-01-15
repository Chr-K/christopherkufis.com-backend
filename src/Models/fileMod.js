const multer = require('multer')

require('dotenv').config({path:'../.env'})

const imagePath = process.env.ARTICLE_IMAGE_PATH

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,imagePath)
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now().toString())
    }
})
const upload = multer({storage:storage})



async function uploadImage(req,res){
    console.log(req.file.filename)
    res.send("test")
}

module.exports = {
    uploadImage,
    upload
}