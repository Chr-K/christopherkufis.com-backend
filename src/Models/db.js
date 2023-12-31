const mysql = require('mysql')
require('dotenv').config({path:'../.env'})
const connection = mysql.createConnection({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB})

async function getStuff(callback){
    connection.connect()

    connection.query('SELECT * FROM BLOG',(err,rows,fields)=>{
        if(err) 
        {console.error(err.stack)}
        else{
            callback(rows)
        }
        connection.end();
    })

}

module.exports = getStuff;