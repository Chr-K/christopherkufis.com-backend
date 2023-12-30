const db = require('./db')

async function getArticles(callback){
    const conn = db.createConnection();
    try{
        const results =  conn.query('SELECT * FROM BLOG')
        return results
    }
    catch(err){
        throw err;
    }
    finally{
        conn.end();
    }
}


module.exports = getArticles