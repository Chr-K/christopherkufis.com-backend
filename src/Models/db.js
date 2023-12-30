const dotenv = require('dotenv');
dotenv.config({path:'../.env'})

const mysql = require('mysql2/promise')

async function createConnection(){
    try{
        const connection = await mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB,
        })

        connection.promise = () => connection;
        return connection;

    }

    catch(error){
        console.error('Error creating MySql connection: ', error);
        throw error;
    }

}

module.exports = {
    createConnection,
};