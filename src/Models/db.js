const dotenv = require('dotenv');
dotenv.config({path:'../.env'})

const mysql = require('mysql2/promise')

function createConnection(){
    const connection = mysql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB,
    })
    connection.promise = () => {
        return new Promise((resolve,reject) => {
            connection.connect((err)=>{
                if(err){
                    reject(err);
                }
                else{
                    resolve(connection)
                }
            })
        })
    }
    return connection;
}

module.exports = {
    createConnection,
};