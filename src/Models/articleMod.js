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
    async function createArticle(data){
        return new Promise((resolve,reject)=>{
            connection.getConnection((err,connection)=>{
                if(err){
                    console.error(err)
                    reject(err)
                }
                else{
                    connection.query('INSERT INTO BLOG (title,subtitle,content) values (?,?,?)',[data.title,data.subtitle,data.content],(err,rows,fields)=>{
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
    async function deleteArticle(id){
        return new Promise((resolve,reject)=>{
            connection.getConnection((err,connection)=>{
                if(err){
                    console.error(err)
                    reject(err)
                }
                else{
                    connection.query('DELETE FROM BLOG WHERE ID = ?',[id],(err,rows,fields)=>{
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
        getArticle,
        createArticle,
        deleteArticle
    }