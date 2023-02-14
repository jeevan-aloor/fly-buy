var jwt=require("jsonwebtoken")

const varify=(req,res,next)=>{
    const token=req.headers.authorization
    console.log(token)
    if(token){
        const decoded=jwt.verify(token,"masai")
        if(decoded){
            // const userID=decode.userID
            console.log(decoded)
            // req.body.userID=userID
            next()
        }else{
            res.send("please login")
        }
    }else{
        res.send("please login")
    }

}

module.exports={
    varify
}