import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Image, Grid, GridItem, Text,Flex,Heading } from '@chakra-ui/react'
import Slider from './Slider'
import axios from 'axios'
import Navbar from '../router/Navbar'


function Home() {

    const [mongodata, setdata] = useState([])
    const [pimage,setImage]=useState("")
    const [pname,setName]=useState("")
    const [prate,setRate]=useState("")
    const [pdesc,setDesc]=useState("")
    

    const getdata = async () => {

        let res = await axios.get("http://localhost:8000")
        let data = res.data
        setdata(data)


    }

    const handleadd=async(img,name,rate,desc)=>{
        const payload={
            productimage:img,
            productname:name,
            productrate:rate,
            productdesc:desc

          
        }
        try {
            let data=await axios.post("http://localhost:8000/cart/addtocart",payload)
            console.log(data)
            
        } catch (error) {
            console.log(error)
            console.log("error")
            
        }
        
      }


    useEffect(() => {
        getdata()

    }, [])
    return (
        <Box>
            
            
            <Box h="50px" background="red" pt="10px" >
                <marquee style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Get up to 5000rs discount 40%</marquee>

            </Box>
            <Slider />
            <Heading mt="20px">TRENDING PRODUCTS</Heading>
            <Grid templateColumns={{md:"repeat(3, 1fr)",sm:"repeat(2,1fr)",base:"repeat(2,1fr)",lg:"repeat(4,1fr)"}} gap={{md:"6px",sm:"4px",base:"2px"}}  w="95%" m="auto" mt="20px" >
                {
                    mongodata.length > 0 && mongodata.map((ele) => (
                        <Box  key={ele._id}>
                        
                            <GridItem w={{md:'100%',base:"92%"}} h={{md:'600px',base:"550px"}} border="1px solid blue" boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={ele._id}  >
                               <Link to={`/singleproduct/${ele._id}`} ><Image src={ele.productimage} h="50%" w="90%" m="auto" mt="10px" borderRadius="20px" _hover={{ width:"95%" }} /></Link> 
                                <Box textAlign="left" w="90%" m="auto" borderRadius="20px" mt="10px">
                                    <Text fontSize="20px" fontWeight="extrabold">{ele.productname}</Text>
                                    <Text fontSize="18px" color="blue">{ele.productdesc}</Text>
                                    <Flex gap="10px">
                                    <Text fontSize="30px" fontWeight="semibold" color="#0f1111" lineHeight="normal">₹{ele.productrate}</Text>
                                    <Text fontSize="18px" textDecoration="line-through" color="#565959" mt="10px">₹{ele.productstrikerate}</Text>

                                    </Flex >
                                    <Box display="flex" mt="10px">
                                      <Image src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="50px" h="50px" mr="10px" 
                                      onClick={()=>handleadd(ele.productimage,ele.productname,ele.productrate,ele.productdesc)}  />
                                        <Link to={`/checkout/${ele._id}`} style={{width:"200px"}}><Button w="100%" _hover={{ background: "red", color: "white" }}>BUY</Button></Link>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Box>
                    ))

                }

            </Grid>




        </Box>
    )
}

export default Home