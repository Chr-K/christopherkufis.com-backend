import db from './db';

function getArticles(callback){
    const conn = db.createConnection();
    const sql = 'SELECT * FROM BLOG';
    conn.query(sql,(err,results)=>{
        Connection.end();
    })
    
    if(err){
        return callback(err,null);
    }
    return callback(null,results);
}


module.exports ={
getArticles,
}