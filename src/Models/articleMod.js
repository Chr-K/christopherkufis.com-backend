const db = require('./db')

async function getArticles(){
    const conn = db.createConnection();
    try{
        const results = (await conn).query('SELECT * FROM BLOG')
        conn.end();
        return results
    }
    catch(err){
        console.error('Error executing SQL query: ', err)
        throw err;
    }
}


module.exports = getArticles