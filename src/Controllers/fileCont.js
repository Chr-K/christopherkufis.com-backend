const fileMod = require('../Models/fileMod')



async function generateFileNames(req,res){
    fileMod.generateFileNames(req,res)
}


module.exports = {
    generateFileNames
}