const fileMod = require('../Models/fileMod')



async function uploadImage(req,res){
    fileMod.uploadImage(req,res)
}


module.exports = {
    uploadImage
}