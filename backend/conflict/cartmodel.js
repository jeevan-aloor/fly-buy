const mongoose=require("mongoose")

const cartschema=mongoose.Schema({
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

const Cartmodel=mongoose.model("cartdata",cartschema)


module.exports={
    Cartmodel
}