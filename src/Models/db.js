const mysql = require('mysql2')
require('dotenv').config({path:'../.env'})
const connection = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB,
    port:process.env.PORT,
    connectionLimit:25
})
async function getStuff(){
return new Promise((resolve,reject)=>{
    connection.getConnection((err,connection)=>{
        if(err){
            console.error(err)
            reject(err)
        }
        else{
            connection.query('SELECT * FROM BLOG',(err,rows,fields)=>{
                connection.release()
                if(err){
                    console.error(err.stack)
                    reject(err)
                }
                else{
                    resolve(rows)
                }
            })
        }
    })



})
}

module.exports = getStuff;