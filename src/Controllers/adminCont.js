const AdminModel = require('../Models/adminMod')
const authModel = require('../auth')

async function Login(req,res){
    try{
        const response = await AdminModel.GETUserByName(req.body['USERNAME'])
        const auth = await authModel.Authenticate(response,req)
        res.send(auth)
    }
    catch(err){
        console.error(err)
    }
}
module.exports = {
    Login
}