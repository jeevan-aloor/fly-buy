const express = require("express");
const {AllproductModel}=require("../conflict/allproductmodel")


const allproductRouter = express.Router();

let perpage=8



allproductRouter.get("/",async(req,res)=>{
    let page=req.query.page
    let search=req.query.q
  
    

    try {
        if(!search){
            let data=await AllproductModel.find().limit(perpage).skip(perpage * (page - 1))
            res.send(data)

        }else{
            let data=await AllproductModel.find({ $or: [
                { productdesc: { $regex: search, $options: 'i' } }
                
              ]}).limit(perpage).skip(perpage * (page - 1))
              res.send(data)

        }
        

        
    //     if(search !=""){
            
    //         data.map((ele)=>{
    //             if(ele.productname.includes(search)){
    //                 console.log("jee")
    //             }
                
              
    //     }
    //     )
    // }
        
        
    } catch (error) {
        res.status(401).json({msg:"error in taking data"})
        console.log(error)
        // console.log("error")
        
    }
    
})
allproductRouter.get("/singleproduct/:id",async(req,res)=>{
    let param=req.params.id

    try {
        let data=await AllproductModel.find({_id:param})
        res.send(data)
        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }
    
})
allproductRouter.get("/checkoutdata/:id",async(req,res)=>{
    let param=req.params.id

    try {
        let data=await AllproductModel.find({_id:param})
        res.send(data)
        
    } catch (error) {
        console.log(error)
        console.log("error")
        
    }
    
})
allproductRouter.post("/allproductpost",async(req,res)=>{
    const {productimage,productname,productdesc,productrate,productimage2,productimage3,productimage4,productstrikerate,productoffer}=req.body
    try {
        const user=new AllproductModel({
            productimage,
            productname,
            productdesc,
            productrate,
            productimage2,
            productimage3,
            productimage4,
            productstrikerate,
            productoffer
            

        })
        await user.save()
        res.send("done")
        console.log("done")
        
    } catch (error) {
        res.send("error in posting")
        console.log("error in posting")
        console.log(error)
        
    }

})

allproductRouter.delete("/singleproductdelete/:id",async(req,res)=>{
    const ID=req.params.id
    try {
        await AllproductModel.findByIdAndDelete({ _id: ID });
        res.send("deleted successfully");
      } catch (error) {
        console.log(error);
        console.log("error", "deleting");
      }
});








module.exports={
    allproductRouter
}