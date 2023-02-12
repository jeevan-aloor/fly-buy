const express=require('express')
const {connection} =require("./conflict/db")
const {productRouter} =require("./router/productrouter")
const {allproductRouter} =require("./router/allproduct")
const {cartproductrouter}=require("./router/cartproduct")
const {userrouter}=require("./router/userdetails")
const {shoeRouter}=require("./router/shoerouter")
require('dotenv').config()
const cors=require("cors")
const { varify } = require('./middleware/verify')
const stripe = require('stripe')("sk_test_51MXJMUSDTMqP1T3rxJg5nq1O4zNqaZWg5pMM9p9GRyUgDkCd2hYdZlX0vagbHjYJFDK4mEY3s6eJml3Crbju3hsu00rgzRJ4Vh");



const app=express()
app.use(cors({
    origin:"*"
  }))
app.use(express.json());
app.use("/",allproductRouter)
app.use("/product",productRouter)
app.use("/user",userrouter)
app.use("/shoes",shoeRouter)
// app.use(varify)

app.use("/cart",cartproductrouter)

app.post('/api/payments', async (req, res) => {
    try {
      const { token, amount } = req.body;
  
      const charge = await stripe.charges.create({
        amount: amount * 100,
        currency: 'inr',
        description: 'Example charge',
        source: token
      });
  
      res.send({
        success: true,
        message: 'Payment processed successfully'
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        message: error.message
      });
    }
  });





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