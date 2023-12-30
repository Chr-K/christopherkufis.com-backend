const express = require('express')
require('dotenv').config({path:'../.env'})
import {connection} from './Models/db'
const app = express()
const port = process.env.PORT

app.get('/',(req,res)=>{
    res.send(connection)
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
