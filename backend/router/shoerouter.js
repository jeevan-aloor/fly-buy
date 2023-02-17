const express = require("express");
const {ShoeModel}=require('../conflict/shoemodel')

const shoeRouter=express.Router()


shoeRouter.get("/getshoes",async(req,res)=>{
    try {
        const data=await ShoeModel.find()
        res.send(data)
        
        
    } catch (error) {
        res.status(401).json({msg:"something wrong"})
        console.log("error")
        
    }
})                                                      



shoeRouter.post("/postshoes",async(req,res)=>{
    const {shoeimage,shoename,shoerate,shoestrikerate,shoecategory}=req.body
    try {
        const user=new ShoeModel({
            shoeimage,
            shoename,
            shoerate,
            shoestrikerate,
            shoecategory

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
    shoeRouter
}

