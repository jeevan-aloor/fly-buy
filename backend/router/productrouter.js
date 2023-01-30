const express = require("express");
const {ClothModel}=require("../conflict/model")


const productRouter = express.Router();


productRouter.get("/",async(req,res)=>{

    try {
        let data=await ClothModel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }
    
})

productRouter.post("/postdata",async(req,res)=>{
    const {clothimage,clothname,clothdesc,clothrate,clothsize}=req.body
    try {
        const user=new ClothModel({
            clothimage,
            clothname,
            clothdesc,
            clothrate,
            clothsize

        })
        await user.save()
        res.send("done")
        console.log("done")
        
    } catch (error) {
        res.send("error in posting")
        console.log("error in posting")
        console.log(error)
        
    }

})

module.exports={
    productRouter
}