const mysql = require('mysql2/promise')

 function createConnection(){
    try{
        const connection = mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB,
        })

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