const mongoose=require("mongoose")

const allproductschema=mongoose.Schema({
    productimage:String,
    productname:String,
    productdesc:String,
    productrate:Number
    
    
})

const AllproductModel=mongoose.model("allproductdata",allproductschema)


module.exports={
    AllproductModel
}