const mongoose=require("mongoose")

const clothsschema=mongoose.Schema({
    clothimage:String,
    clothname:String,
    clothdesc:String,
    clothrate:Number,
    clothsize:String
    
})

const ClothModel=mongoose.model("clothdata",clothsschema)


module.exports={
    ClothModel
}