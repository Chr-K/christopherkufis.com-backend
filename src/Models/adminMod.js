const connection = require('./db')

async function GETUserByName(){
    return new Promise((resolve,reject)=>{
        connection.getConnection((err,connection)=>{
            if(err){
                console.error(err)
                reject(err)
            }
            else{
                connection.query('SELECT * FROM USERS WHERE NAME = ?',(err,rows,fields)=>{
                    connection.release();
                    if(err){
                        console.error(err.stack)
                        reject(err)
                    }
                    else{
                        resolve(rows)
                    }
                })
            }
        })
    })
}

module.exports = {
    GETUserByName
}