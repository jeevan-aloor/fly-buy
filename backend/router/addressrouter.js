const express = require("express");
const {AddressModel} =require("../conflict/address")


const addressrouter = express.Router();


addressrouter.get("/getaddress",async(req,res)=>{
    try {
        const data=await AddressModel.find()
        res.send(data)
        
    } catch (error) {
        console.log(error)
        res.send("not able to take address data")
        
    }
})



addressrouter.post("/addaddress",async(req,res)=>{
    const {name,mobileno,pincode,address,state}=req.body
    try {

        const data=new AddressModel({
            name,mobileno,pincode,address,state
            
        })
        await data.save()
        res.send("added address")
        console.log("added address")
        
    } catch (error) {
        console.log(error)
        console.log("error in adding address")
        
    }
})


addressrouter.delete("/addressdelete/:id",async(req,res)=>{
    const ID=req.params.id
    try {
       await AddressModel.findByIdAndDelete({_id:ID})
       res.send("address deleted")
       console.log('deleted')
        
    } catch (error) {
        console.log(error)
        console.log("error in deleting address")
        
    }

})

module.exports={
    addressrouter
}