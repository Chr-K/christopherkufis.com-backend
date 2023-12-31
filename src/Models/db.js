const mysql = require('mysql')
require('dotenv').config({path:'../.env'})
const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB,
    port:process.env.PORT
})

function connect() {
    return new Promise((resolve, reject) => {
      connection.connect((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
  
  function query(sql) {
    return new Promise((resolve, reject) => {
      connection.query(sql, (err, rows, fields) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }
  
  async function getStuff() {
    try {
      await connect();
      const rows = await query('SELECT * FROM BLOG');
      return rows;
    } catch (error) {
      console.error(error);
      throw error; // Rethrow the error for higher-level error handling
    } finally {
      connection.end();
    }
  }
  
  module.exports = getStuff;