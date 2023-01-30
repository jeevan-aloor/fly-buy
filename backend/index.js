const express=require('express')
const {connection} =require("./conflict/db")
const {productRouter} =require("./router/productrouter")
require('dotenv').config()



const app=express()
app.use(express.json());
app.use("/",productRouter)





app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to db")
        
    } catch (error) {
        console.log("not able to connect to db")
        
    }
    console.log("server is running in 8000")
})