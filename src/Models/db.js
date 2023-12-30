const mysql = require('mysql2/promise')

async function createConnection(){
    try{
        const connection = await mysql.createConnection({
            host:process.env.DB_HOST,
            user:process.env.DB_USER,
            password:process.env.DB_PASSWORD,
            database:process.env.DB,
        })

        connection.promise = () => {
            return new Promise((resolve,reject)=>{
                connection.connect((err)=>{
                    if(err){
                        reject(err)
                    }
                    else{
                        resolve(connection)
                    }
                })
            })
        };
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