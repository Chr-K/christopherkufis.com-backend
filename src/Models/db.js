const mysql = require('mysql2')
require('dotenv').config({path:'../.env'})
const connection = mysql.createConnection()

async function getStuff(){
    connection.connect()

    connection.query('SELECT * FROM BLOG',(err,rows,fields)=>{
        if(err) 
        {console.log(err)}
    
        return rows[0]
    })

    connection.end();
}

module.exports = getStuff;