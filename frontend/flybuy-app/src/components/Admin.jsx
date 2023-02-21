import { Box, Heading ,FormControl,FormLabel,Input, Button } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import style from './Home.css'
import axios from 'axios'
import Navbar from '../router/Navbar'

function Admin() {
    const [userData, setUserData] = useState([])
    const [productimage,setProductimage]=useState("")
    const [productname,setProductname]=useState("")
    const [productdesc,setProductdesc]=useState("")
    const [productrate,setProductrate]=useState("")
    const [productimage2,setProductimage2]=useState("")
    const [productimage3,setProductimage3]=useState("")
    const [productimage4,setProductimage4]=useState("")
    const [productoffer,setProductoffer]=useState("")
    const [productstrikerate,setProductstrikerate]=useState("")
    const [id,setId]=useState("")

    const getUserData = async () => {
        let res = await axios.get("http://localhost:8000/user")
        setUserData(res.data)

    }
    console.log(userData)

    //  add trending product data

    const addTrendingProduct=async()=>{
        const payload={
            productimage,
            productname,
            productdesc,
            productrate,
            productimage2,
            productimage3,
            productimage4,
            productoffer,
            productstrikerate

        }
        try {
            await axios.post("http://localhost:8000/allproductpost",payload)
            console.log("added")
            
        } catch (error) {
            console.log(error)
            
        }

       
    }
    //  for Delete product

    const deleteProduct=async(deleteid)=>{
        try {
            await axios.delete(`http://localhost:8000/singleproductdelete/${id}`)
            console.log("deleted")
            
        } catch (error) {
            console.log(error)
            
        }
        

    }


    useEffect(() => {
        getUserData()

    }, [])



    return (
        <Box>
            <Box>
                <Navbar/>

            </Box>
            <Heading>User Data</Heading>
            <table className="table" >
                <tr style={{ border: "1px solid red" }}>
                    <th>user id</th>
                    <th>name</th>
                    <th>mobile</th>
                    <th>email</th>
                    <th >password</th>

                </tr>
                {
                    userData.length > 0 && userData.map((ele) => (
                        <tr>
                            <td>{ele._id}</td>
                            <td>{ele.name}</td>
                            <td>{ele.mobilenumber}</td>
                            <td>{ele.email}</td>
                            <td >{ele.password}</td>
                        </tr>
                    ))

                }

            </table>

            <Heading>Add product to trending product</Heading>

            <FormControl w="800px" m="auto" border="1px solid black" display="flex" gap="20px">
                <Box w="50%">
                <FormLabel>product image</FormLabel>
                <Input placeholder='product image' onChange={(e)=>setProductimage(e.target.value)} />
                <FormLabel>product name</FormLabel>
                <Input placeholder='product name' onChange={(e)=>setProductname(e.target.value)}/>
                <FormLabel>product desc</FormLabel>
                <Input placeholder='product desc' onChange={(e)=>setProductdesc(e.target.value)} />
                <FormLabel>product rate</FormLabel>
                <Input placeholder='product rate' onChange={(e)=>setProductrate(e.target.value)}/>
                <FormLabel>product image2</FormLabel>
                <Input placeholder='product image2' onChange={(e)=>setProductimage2(e.target.value)}/>
                </Box>
                <Box w="40%">
                <FormLabel>product image3</FormLabel>
                <Input placeholder='product image3' onChange={(e)=>setProductimage3(e.target.value)}/>
                <FormLabel>product image4 name</FormLabel>
                <Input placeholder='product image4' onChange={(e)=>setProductimage4(e.target.value)}/>
                <FormLabel>product offer </FormLabel>
                <Input placeholder='product offer' onChange={(e)=>setProductoffer(e.target.value)}/>
                <FormLabel> product strikerate</FormLabel>
                <Input placeholder="productstrikerate" onChange={(e)=>setProductstrikerate(e.target.value)}/>
                </Box>
                
            </FormControl>
            <Button onClick={addTrendingProduct}>Add product</Button>

            <Heading>Delete product</Heading>
            <Input w="300px" m="auto" onChange={(e)=>setId(e.target.value)}/>
            <Button onClick={()=>deleteProduct(id)}>delete</Button>



        </Box>
    )
}

export default Admin