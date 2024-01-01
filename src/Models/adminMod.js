const connection = require('./db')

async function GETUserByName(NAME){
    return new Promise((resolve,reject)=>{
        connection.getConnection((err,connection)=>{
            if(err){
                console.error(err)
                reject(err)
            }
            else{
                connection.query('SELECT * FROM USER WHERE USERNAME = ?',[NAME],(err,rows,fields)=>{
                    connection.release();
                    if(err){
                        console.error(err.stack)
                        reject(err)
                    }
                    else{
                        resolve(rows[0])
                    }
                })
            }
        })
    })
}

module.exports = {
    GETUserByName
}