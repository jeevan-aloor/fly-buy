const mongoose=require("mongoose")

const allproductschema=mongoose.Schema({
    productimage:String,
    productname:String,
    productdesc:String,
    productrate:Number,
    productimage2:String,
    productimage3:String,
    productimage4:String,
    productoffer:String,
    productstrikerate:Number

    
    
})

const AllproductModel=mongoose.model("allproductdata",allproductschema)


module.exports={
    AllproductModel
}