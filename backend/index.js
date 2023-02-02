const express=require('express')
const {connection} =require("./conflict/db")
const {productRouter} =require("./router/productrouter")
const {allproductRouter} =require("./router/allproduct")
require('dotenv').config()
const cors=require("cors")



const app=express()
app.use(cors({
    origin:"*"
  }))
app.use(express.json());
app.use("/",allproductRouter)
app.use("/product",productRouter)





app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to db")
        
    } catch (error) {
        console.log(error)
        console.log("not able to connect to db")
        
    }
    console.log("server is running in 8000")
})