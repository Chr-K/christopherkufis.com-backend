import db from './db';

function getArticles(callback){
    const conn = db.createConnection();
    const sql = 'SELECT * FROM BLOG';
    conn.query(sql,(err,results)=>{
        conn.end();

        if(err){
            return callback(err,null);
        }

        return callback(null,results);
    })
}


export default getArticles