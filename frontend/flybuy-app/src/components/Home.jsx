import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { Box, Button, Image, Grid, GridItem, Text,Flex,Heading } from '@chakra-ui/react'
import Slider from './Slider'
import axios from 'axios'
import Navbar from '../router/Navbar'


function Home() {

    const [mongodata, setdata] = useState([])

    const getdata = async () => {

        let res = await axios.get("http://localhost:8000")
        let data = res.data
        setdata(data)


    }


    useEffect(() => {
        getdata()

    }, [mongodata])
    return (
        <Box>
            
            
            <Box h="50px" background="red" pt="10px" >
                <marquee style={{ color: "white", fontWeight: "bold", fontSize: "20px" }}>Get up to 5000rs discount 40%</marquee>

            </Box>
            <Slider />
            <Heading mt="20px">TRENDING PRODUCTS</Heading>
            <Grid templateColumns='repeat(4, 1fr)' gap={6} h="300px" w="95%" m="auto" mt="20px" >
                {
                    mongodata.length > 0 && mongodata.map((ele) => (
                        <>
                            <GridItem w='100%' h='600px' border="1px solid blue" boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={ele._id}  >
                               <Link to={`/singleproduct/${ele._id}`}><Image src={ele.productimage} h="50%" w="90%" m="auto" mt="10px" borderRadius="20px" _hover={{ width:"95%" }} /></Link> 
                                <Box textAlign="left" w="90%" m="auto" borderRadius="20px" mt="10px">
                                    <Text fontSize="20px" fontWeight="extrabold">{ele.productname}</Text>
                                    <Text fontSize="18px" color="blue">{ele.productdesc}</Text>
                                    <Flex gap="10px">
                                    <Text fontSize="30px" fontWeight="semibold" color="#0f1111" lineHeight="normal">₹{ele.productrate}</Text>
                                    <Text fontSize="18px" textDecoration="line-through" color="#565959" mt="10px">₹{ele.productrate}</Text>

                                    </Flex >
                                    <Box display="flex" mt="10px">
                                        <Image src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="50px" h="50px" mr="10px" />
                                        <Link to="/checkout" style={{width:"200px"}}><Button w="100%" _hover={{ background: "red", color: "white" }}>BUY</Button></Link>
                                    </Box>
                                </Box>
                            </GridItem>
                        </>
                    ))

                }

            </Grid>




        </Box>
    )
}

export default Home