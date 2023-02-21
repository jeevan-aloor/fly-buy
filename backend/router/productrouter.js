const express = require("express");
const {ClothModel}=require("../conflict/model")


const productRouter = express.Router();


productRouter.get("/getcloths",async(req,res)=>{
    let query=req.query.clothcategory
    let clothsss=req.query.rate
    // console.log("rate",rate)
    let sortforRate=req.query.sorting
    
  

    try {
        if(query==undefined){
            if(sortforRate==undefined){
                let data=await ClothModel.find()
            // .sort({clothrate:`${sortforRate}`})
            res.send(data)
            

            }else{
                let data=await (await ClothModel.find().sort({clothrate:`${sortforRate}`}))
            // .sort({clothrate:`${sortforRate}`})
            res.send(data)
            console.log("sortforRate",sortforRate) 
            }
            

        }else{
            let data=await ClothModel.find({clothcategory:query}).sort({clothrate:`${sortforRate}`})
            res.send(data)
            console.log(data)

        }
        
         
        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }
    
})

productRouter.post("/postdata",async(req,res)=>{
    const {clothimage,clothname,clothrate,clothstrikerate,clothcategory}=req.body
    try {
        const user=new ClothModel({
            clothimage,
            clothname,
            clothrate,
            clothstrikerate,
            clothcategory

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