const connection = require('./db')

async function Login(){
    return new Promise((resolve,reject)=>{
        connection.getConnection((err,connection)=>{
            if(err){
                console.error(err)
            }
            else{
                connection.query('GET * FROM BLOG',(err,rows,fields)=>{
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
    Login
}