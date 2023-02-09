import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Image, Grid, GridItem, Text, Flex, Heading, Tooltip, useToast } from '@chakra-ui/react'
import Slider from './Slider'
import axios from 'axios'
import Navbar from '../router/Navbar'
import styles from './Home.css'
import "aos/dist/aos.css";
import Aos from "aos";


function Home() {

    const [mongodata, setdata] = useState([])
    const [pimage, setImage] = useState("")
    const [pname, setName] = useState("")
    const [prate, setRate] = useState("")
    const [pdesc, setDesc] = useState("")
    const [pageno,setPage]=useState(1)
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']


    const getdata = async () => {
        try {
            let res = await axios.get(`http://localhost:8000?page=${pageno}`)
            let data = res.data
            setdata(data)
            console.log(data)
            
        } catch (error) {
            console.log(error)
            
        }

       


    }
    // Pagination
    const handleprev=()=>{
        if(pageno!=1){
            setPage(pageno-1)
        }
    }

    const handlenext=()=>{
        let maxPage=Math.ceil(mongodata.length/2)
        if(pageno<maxPage){
            setPage(pageno+1)
        }
    }


    const handleadd = async (img, name, rate, desc) => {
        const payload = {
            productimage: img,
            productname: name,
            productrate: rate,
            productdesc: desc


        }
        try {
            let data = await axios.post("https://vast-gold-fox-slip.cyclic.app/cart/addtocart", payload)
            console.log(data)
            toast({
                title: "successfully Added to the cart",
                status: "success",
                isClosable: true,
            })

        } catch (error) {
            console.log(error)
            console.log("error")
            toast({
                title: "error toast",
                status: "error",
                isClosable: true,
            })

        }


    }


    useEffect(() => {
        getdata()
        Aos.init({ duration: 2000 });

    }, [pageno])
    return (
        <Box>


            <Box h="50px" background="red" pt="10px" >
                <marquee style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} >Get up to 5000rs products you get 20% cashback hurry up!</marquee>

            </Box>
            <Slider />
            <Heading mt="40px">TRENDING PRODUCTS</Heading>
            <Grid templateColumns={{ md: "repeat(3, 1fr)", sm: "repeat(2,1fr)", base: "repeat(2,1fr)", lg: "repeat(4,1fr)" }} gap={{ md: "8px", sm: "4px", base: "2px" }} w="95%" m="auto" mt="20px" background="#caf0f8" >
                {
                    mongodata.length > 0 && mongodata.map((ele) => (
                        <Box key={ele._id}>

                            <GridItem mb="20px" w={{ md: '100%', base: "92%" }} h={{ md: '600px', base: "550px" }} boxShadow=" rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" key={ele._id} background="#cbf3f0" data-aos="fade-up"  >
                                <Link to={`/singleproduct/${ele._id}`} ><Tooltip label="Click to see product deatils"><Image className='anim' src={ele.productimage} h="50%" w="90%" m="auto" mt="10px" borderRadius="20px"  /></Tooltip></Link>
                                <Box textAlign="left" w="90%" m="auto" borderRadius="20px" mt="10px">
                                    <Text fontSize="20px" fontWeight="extrabold">{ele.productname}</Text>
                                    <Text fontSize="18px" color="blue">{ele.productdesc}</Text>
                                    <Flex gap="10px">
                                        <Text fontSize="30px" fontWeight="semibold" color="#0f1111" lineHeight="normal" mt="20px">₹{ele.productrate}</Text>
                                        <Text fontSize="18px" textDecoration="line-through" color="#565959" mt="30px">₹{ele.productstrikerate}</Text>
                                        <Text fontSize="20px" mt="20px">(20% OFF)</Text>

                                    </Flex >
                                    <Box display="flex" mt="10px">
                                        <Tooltip label="Add to cart"><Image mt="40px" src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="50px" h="50px" mr="10px"
                                            onClick={() => handleadd(ele.productimage, ele.productname, ele.productrate, ele.productdesc)} />
                                        </Tooltip>
                                        <Link to={`/checkout/${ele._id}`} style={{ width: "200px" }}><Button mt="40px" w="100%" _hover={{ background: "red", color: "white" }} className='buy'>BUY</Button></Link>
                                    </Box>
                                </Box>
                            </GridItem>
                        </Box>
                    ))

                }

            </Grid>
            <Button onClick={handleprev}>PREV</Button>
          
            <Button>{pageno}</Button>
            <Button onClick={handlenext}>NEXT</Button>




        </Box>
    )
}

export default Home