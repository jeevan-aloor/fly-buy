const mongoose=require("mongoose")

const clothsschema=mongoose.Schema({
    clothimage:String,
    clothname:String,
    clothrate:Number,
    clothstrikerate:Number,
    clothcategory:String
    
})

const ClothModel=mongoose.model("clothdata",clothsschema)


module.exports={
    ClothModel
}