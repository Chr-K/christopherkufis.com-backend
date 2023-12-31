const mysql = require('mysql')
require('dotenv').config({path:'../.env'})
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB,
    port:process.env.PORT
})

async function getStuff(){
    connection.connect()

    connection.query('SELECT * FROM BLOG',(err,rows,fields)=>{
        if(err) 
        {console.log(err)}
        connection.end();
        return(rows)
    })

}

module.exports = getStuff;