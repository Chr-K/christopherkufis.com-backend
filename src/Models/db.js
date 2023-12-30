import pkg from 'mysql2'
const {mysql} = pkg

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB
})

connection.connect()

connection.query('SELECT * FROM BLOG',(err,rows,fields)=>{
    if(err) throw err

    return rows;
})