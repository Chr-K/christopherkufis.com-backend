const mysql = require('mysql2')
require('dotenv').config({path:'../.env'})
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB,
    port:process.env.PORT,
    waitForConnections:true,
    
})

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