const mongoose=require("mongoose")

const addressschema=mongoose.Schema({
    name:String,
    mobileno:Number,
    pincode:Number,
    address:String,
    state:String
    
})

const AddressModel=mongoose.model("addressdata",addressschema)


module.exports={
    AddressModel
}