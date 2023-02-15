const mongoose=require("mongoose")

const watchschema=mongoose.Schema({
    watchimage:String,
    watchname:String,
    watchrate:Number,
    watchstrikerate:Number,
    watchcategory:String
    
})

const WatchModel=mongoose.model("watchdata",watchschema)


module.exports={
    WatchModel
}