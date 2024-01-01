const AdminModel = require('../Models/adminMod')


async function Login(){
    try{
        const response = await AdminModel.Login()
        res.send(response)
    }
    catch(err){
        console.error(err)
    }
}
module.exports = {
    Login
}