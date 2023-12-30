require('dotenv').config();

const createConnection = require('mysql2')

function createConnection(){
    const connection = msql.createConnection({
        host:process.env.DB_HOST,
        user:process.env.DB_USER,
        password:process.env.DB_PASSWORD,
        database:process.env.DB,
    })
}

module.exports = {
    createConnection,
};