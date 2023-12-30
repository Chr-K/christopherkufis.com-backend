const db = require('./db')

async function getArticles(){
    const conn = db.createConnection();
    try{
        const results = await conn.promise().query('SELECT * FROM BLOG')
        return results
    }
    catch(err){
        console.error('Error executing SQL query: ', err)
        throw err;
    }
    finally{
        conn.end();
    }
}


module.exports = getArticles