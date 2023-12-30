const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send("hello World")
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
