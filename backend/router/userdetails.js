const express=require("express")
const {DataModel}=require("../conflict/Userdatamodel")
var jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userrouter = express.Router()


userrouter.get("/",async(req,res)=>{
    try {
        const data = await DataModel.find();
        res.send(data);
      } catch (error) {
        console.log(error);
      }
    });


    userrouter.post("/adduser",async(req,res)=>{
        const {name,mobilenumber,email,password}=req.body
        try {
            bcrypt.hash(password, 5, async (err, secure_password) => {
              // Store hash in your password DB.
              if (err) {
                res.send(err);
              } else {
                const User = new DataModel({
                  name,
                  mobilenumber,
                  email,
                  password:secure_password
                  
                });
                await User.save();
                res.send("added");
                console.log("done");
              }
            });
            // const user = new DataModel({name,email,pass,age});
            //       await user.save();
            //       res.send("added");
            //       console.log(user);
          } catch (error) {
            console.log(error);
            console.log("error");
          }
    })


    userrouter.post("/userlogin",async (req, res) => {
        const { email, password } = req.body;
        console.log("pass",password)
        try {
          const data =await DataModel.find({email})
          console.log(data)
          
      
          if (data.length > 0) {
            let values = data[0].password;
            console.log("jeevan");
      
            bcrypt.compare(password, values, (err, result) => {
                // console.log("com",password,values)
              
                
                    if (password == values) {
                        const token=jwt.sign({userID:"backend"},'masai')
                        // const token = jwt.sign({ course: "backend"}, "masai");
                        
                       
                        console.log(token);
                        
                        
                        
                        res.send(token);
                        console.log("done")
                      } else {
                        res.send("wrong password");
                      }

                

            });
          } else {
            res.send("not registered");
          }
          console.log(data);
        } catch (error) {
          console.log(error);
          console.log("wrong credential");
        }
      });



module.exports={
    userrouter
}

