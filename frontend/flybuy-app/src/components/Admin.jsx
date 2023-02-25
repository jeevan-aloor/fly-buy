import { Box, Heading, FormControl, FormLabel, Input, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import style from './Home.css'
import axios from 'axios'
import Navbar from '../router/Navbar'

function Admin() {
    const [userData, setUserData] = useState([])
    const [productimage, setProductimage] = useState("")
    const [productname, setProductname] = useState("")
    const [productdesc, setProductdesc] = useState("")
    const [productrate, setProductrate] = useState("")
    const [productimage2, setProductimage2] = useState("")
    const [productimage3, setProductimage3] = useState("")
    const [productimage4, setProductimage4] = useState("")
    const [productoffer, setProductoffer] = useState("")
    const [productstrikerate, setProductstrikerate] = useState("")
    const [id, setId] = useState("")
    const toast = useToast()

    const getUserData = async () => {
        let res = await axios.get("http://localhost:8000/user")
        setUserData(res.data)

    }
    console.log(userData)

    //  add trending product data

    const addTrendingProduct = async () => {
        const payload = {
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
            await axios.post("http://localhost:8000/allproductpost", payload)
            console.log("added")

        } catch (error) {
            console.log(error)

        }
        toast({
            title: 'Product added succussfully',
            description: "Product Added",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })


    }
    //  for Delete product

    const deleteProduct = async (deleteid) => {
        try {
            await axios.delete(`http://localhost:8000/singleproductdelete/${id}`)
            console.log("deleted")

        } catch (error) {
            console.log(error)

        }
        toast({
            title: 'Product Deleted succussfully',
            description: "Product Deleted",
            status: 'success',
            duration: 9000,
            isClosable: true,
        })
        setId("")


    }


    useEffect(() => {
        getUserData()

    }, [])



    return (
        <Box background="rgb(243 244 246)"   >
            <Box >
                <Navbar />

            </Box>
            <Box ><Heading textDecoration="underline">Admin page</Heading></Box>

            <Heading mt="30px" mb="20px">Add product to trending product</Heading>

            <FormControl w="800px" m="auto" display="flex" gap="20px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" pl="20px" pt="20px" >
                <Box w="50%">
                    <FormLabel fontWeight="semibold">Product image</FormLabel>
                    <Input placeholder='product image' onChange={(e) => setProductimage(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold">Product name</FormLabel>
                    <Input placeholder='product name' onChange={(e) => setProductname(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold">Product desc</FormLabel>
                    <Input placeholder='product desc' onChange={(e) => setProductdesc(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold">Product rate</FormLabel>
                    <Input placeholder='product rate' onChange={(e) => setProductrate(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold">Product image2</FormLabel>
                    <Input placeholder='product image2' onChange={(e) => setProductimage2(e.target.value)} mb="20px" border="1px solid black" />
                </Box>
                <Box w="40%">
                    <FormLabel fontWeight="semibold">ProductPimage3</FormLabel>
                    <Input placeholder='product image3' onChange={(e) => setProductimage3(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold">Product image4 name</FormLabel>
                    <Input placeholder='product image4' onChange={(e) => setProductimage4(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold">Product offer </FormLabel>
                    <Input placeholder='product offer' onChange={(e) => setProductoffer(e.target.value)} mb="20px" border="1px solid black" />
                    <FormLabel fontWeight="semibold"> Product strikerate</FormLabel>
                    <Input placeholder="productstrikerate" onChange={(e) => setProductstrikerate(e.target.value)} mb="20px" border="1px solid black" />
                </Box>

            </FormControl>
            <Button onClick={addTrendingProduct} mt="20px" w="300px" background="blue.300">Add Product</Button>

            <Heading mt="30px" mb="20px">Delete Product</Heading>
            <Box border="1px solid red" w="500px" m="auto" pt="10px" borderRadius="20px">
                <Input placeholder="Enter product ID" w="300px" m="auto" value={id} onChange={(e) => setId(e.target.value)} mb="20px" mr="20px" />
                <Button onClick={() => deleteProduct(id)} background="red.300" w="100px">DELETE</Button>
            </Box>
            <Heading>User Data</Heading>
            <table className="table" style={{ width: "90%", margin: "auto", color: "#000000", fontWeight: "revert" }}  >
                <tr style={{}}>
                    <th style={{ border: "1px solid black" }}>user id</th>
                    <th style={{ border: "1px solid black" }}>name</th>
                    <th style={{ border: "1px solid black" }}>mobile</th>
                    <th style={{ border: "1px solid black" }}>email</th>
                    <th style={{ border: "1px solid black" }}>password</th>

                </tr>
                {
                    userData.length > 0 && userData.map((ele) => (
                        <tr style={{ boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px)", height: "50px", marginTop: "20px", gap: "20px" }}>
                            <td style={{ border: "1px solid red", marginBottom: "20px" }}>{ele._id}</td>
                            <td style={{ border: "1px solid red", marginBottom: "20px" }}>{ele.name}</td>
                            <td style={{ border: "1px solid red", marginBottom: "20px" }}>{ele.mobilenumber}</td>
                            <td style={{ border: "1px solid red" }}>{ele.email}</td>
                            <td style={{ border: "1px solid red" }}>{ele.password}</td>
                        </tr>
                    ))

                }

            </table>




        </Box>
    )
}

export default Admin