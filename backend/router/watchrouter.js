const express = require("express");
const {WatchModel}=require('../conflict/watchmodel')

const watchRouter=express.Router()


watchRouter.get("/getwatchmen",async(req,res)=>{
    try {
        const data=await WatchModel.find({watchcategory:"Men"})
        res.send(data)
        
        
    } catch (error) {
        res.status(401).json({msg:"something wrong"})
        console.log("error")
        
    }
})  

watchRouter.get("/getwatchwomen",async(req,res)=>{
    try {
        const data=await WatchModel.find({watchcategory:"Women"})
        res.send(data)
        
        
    } catch (error) {
        res.status(401).json({msg:"something wrong"})
        console.log("error")
        
    }
}) 



watchRouter.post("/postwatches",async(req,res)=>{
    const {watchimage,watchname,watchrate,watchstrikerate,watchcategory}=req.body
    try {
        const user=new WatchModel({
            watchimage,
            watchname,
            watchrate,
            watchstrikerate,
            watchcategory

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
    watchRouter
}

