const mongoose=require("mongoose")

const dataschema=mongoose.Schema({
    name:String,
    mobilenumber:Number,
    email:String,
    password:String
    
})

const DataModel=mongoose.model("userdata",dataschema)

module.exports={
    DataModel
}