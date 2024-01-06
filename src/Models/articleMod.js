const connection = require('./db').connectionPool

async function getArticles(){
    return new Promise((resolve,reject)=>{
        connection.getConnection((err,connection)=>{
            if(err){
                console.error(err)
                reject(err)
            }
            else{
                connection.query('SELECT * FROM BLOG',(err,rows,fields)=>{
                    connection.release()
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

    async function getArticle(ID){
        return new Promise((resolve,reject)=>{
            connection.getConnection((err,connection)=>{
                if(err){
                    console.error(err)
                    reject(err)
                }
                else{
                    connection.query('SELECT * FROM BLOG WHERE ID = ?',[ID],(err,rows,fields)=>{
                        connection.release()
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
        getArticles,
        getArticle
    }