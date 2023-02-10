const mongoose=require("mongoose")

const shoeschema=mongoose.Schema({
    shoeimage:String,
    shoename:String,
    shoerate:Number,
    shoestrikerate:Number,
    shoecategory:String
    
})

const ShoeModel=mongoose.model("Shoedata",shoeschema)


module.exports={
    ShoeModel
}