const AdminModel = require('../Models/adminMod')
const authModel = require('../Models/auth')

async function Login(req,res){
    try{
        const response = await AdminModel.GETUserByName()
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