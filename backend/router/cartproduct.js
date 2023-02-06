const express = require("express");
const {Cartmodel} =require("../conflict/cartmodel")


const cartproductrouter = express.Router();


cartproductrouter.get("/cartdata",async(req,res)=>{
    try {
        const data=await Cartmodel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.send("not able to take data")
        
    }
})



cartproductrouter.post("/addtocart",async(req,res)=>{
    const {productimage,productname,productdesc,productrate,productimage2,productimage3,productimage4,productstrikerate,productoffer}=req.body
    try {

        const data=new Cartmodel({
            productimage,productname,productdesc,productrate,productimage2,productimage3,productimage4,productstrikerate,productoffer
        })
        await data.save()
        res.send("added to cart")
        console.log("added to cart")
        
    } catch (error) {
        console.log(error)
        console.log("error in adding cart")
        
    }
})


cartproductrouter.delete("/cartdelete/:id",async(req,res)=>{
    const ID=req.params.id
    try {
       await Cartmodel.findByIdAndDelete({_id:ID})
       res.send("cart item deleted")
       console.log('deleted')
        
    } catch (error) {
        console.log(error)
        console.log("error in deleting cart")
        
    }

})

module.exports={
    cartproductrouter
}