import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Button, Image, Grid, GridItem, Text, Flex, Heading, Tooltip, useToast } from '@chakra-ui/react'
import Slider from './Slider'
import axios from 'axios'
import Navbar from '../router/Navbar'
import styles from './Home.css'
import "aos/dist/aos.css";
import Aos from "aos";
import Footer from './Footer'
// require('dotenv').config()
// require("dotenv").config();



function Home() {

    const [mongodata, setdata] = useState([])
    const [pimage, setImage] = useState("")
    const [pname, setName] = useState("")
    const [prate, setRate] = useState("")
    const [pdesc, setDesc] = useState("")
    const [pageno, setPage] = useState(1)
    const [searchtext, setSearchText] = useState("")
    const [addtocart, setCart] = useState(true)
    const toast = useToast()
    const statuses = ['success', 'error', 'warning', 'info']
    const [load, setLoad] = useState(false)


    const getdata = async () => {
        setLoad(true)
        // https://calm-teal-beanie.cyclic.app
        try {
            let res = await axios.get(`http://localhost:8000?page=${pageno}&&q=${searchtext}`)
            let data = res.data
            setdata(data)
            console.log(data)

        } catch (error) {
            console.log(error)

        }
        setLoad(false)




    }
    // Pagination
    const handleprev = () => {
        if (pageno != 1) {
            setPage(pageno - 1)
        }
    }

    const handlenext = () => {
        let maxPage = Math.ceil(mongodata.length / 2)
        if (pageno < maxPage) {
            setPage(pageno + 1)
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
            let data = await axios.post("https://calm-teal-beanie.cyclic.app/cart/addtocart", payload)
            console.log(data)
            toast({
                title: "successfully Added to the cart",
                status: "success",
                isClosable: true,
            })
            setCart(false)

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
    const handletext = (e) => {
        setSearchText(e.target.value)


    }


    useEffect(() => {
        getdata()
        Aos.init({ duration: 2000 });
        document.title = "Fly-Buy"

    }, [pageno, searchtext])
    console.log("searchtext", searchtext)
    return (
        <Box  >

            {/* position="fixed" border="1px solid red" w="100%" zIndex="100" */}
            <Box position="fixed" w="100%" zIndex="100" >
                <Navbar val={searchtext} ser={setSearchText} />

            </Box>
            



            <Box h="50px" background="red" pt="10px"  >
                <Box  >
                    {
                        searchtext && <Box w="300px" h="80px" border="1px solid black" ml="240px" overflowY="scroll" mt="70px">
                            {

                                mongodata.length > 0 && mongodata.map((ele) => (
                                    <Text onClick={() => setSearchText(ele.productdesc)} w="95%" m="auto" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">{ele.productdesc}</Text>
                                ))
                            }
                        </Box>

                    }


                    <marquee style={{ color: "white", fontWeight: "bold", fontSize: "20px" }} >Get FLAT 10% Off on orders above ₹2499 |
                        Additional 15% on prepaid orders |
                        Easy EMi's Available
                    </marquee>

                </Box>

            </Box >
            {
                searchtext === "" && <> <Box mt="25px"><Slider /></Box> <Box w="95%" h={{ lg: "400px", md: "300px", sm: "200px", base: "200px" }} m="auto" mt="20px"><Image src="https://sslimages.shoppersstop.com/sys-master/root/h8b/hd7/29385726754846/the-new-cool-web--2023-20-feburay--hp-main-carouslee.gif" borderRadius="20px" w="100%" h="100%" /></Box><Box w="95%" m="auto" h="100px" mt="10px">
                    <Image src="https://sslimages.shoppersstop.com/sys-master/root/hb5/h60/27269490540574/web_hp_icon-strips_main_20220322.jpg" w="100%" h="100%" />
                </Box><Text fontSize="42px" color="#000000" fontWeight={{ lg: "400", base: "200", md: "300" }} textAlign="left" ml="20px" mt="20px">Top Categories</Text><Grid templateColumns="repeat(3,1fr)" w="80%" m="auto" h="300px" gap="30px" templateRows="repeat(2,1fr)">
                        <GridItem>
                            <Image src="https://sslimages.shoppersstop.com/sys-master/root/h9d/h87/29438845583390/titan-raga--3x3-Widgets_barefootonthefgreass.jpg" h="90%" />

                        </GridItem>
                        <GridItem>
                            <Image src="https://sslimages.shoppersstop.com/sys-master/root/hb5/h3e/29337061883934/Park-Avenue--3x3-Widgetsruywoixjncbkjsalala.jpg" h="90%" />

                        </GridItem>
                        <GridItem>
                            <Image src="https://sslimages.shoppersstop.com/sys-master/root/h36/he8/29438865571870/Only---Vero-Moda--3x3-Widgets--0333web--mbyn.jpg" h="90%" />

                        </GridItem>



                    </Grid>

                </>
            }
            <Heading mt="40px" color={searchtext ? "white" : "black"} >TRENDING PRODUCTS</Heading>
            {
                load ? <Image src="https://prodstatic.shoppersstop.com/_ui/responsive/common/assets/images/newLoader.gif" h="170px" w="180px" m="auto" mb="20px" /> : <Grid templateColumns={{ md: "repeat(3, 1fr)", sm: "repeat(2,1fr)", base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }} gap={{lg:"10px", md: "8px", sm: "4px", base: "2px" }} w={{ lg: "90%" }} m="auto" mt="20px"   >
                    {
                        mongodata.length > 0 && mongodata.map((ele) => (
                            <Box key={ele._id}>

                                <GridItem mb="20px" w={{ md: '100%', base: "90%" }} h={{lg:"550px", md: '600px', base: "550px" }} key={ele._id} className='shape' data-aos="fade-right" background={"rgb(241 245 249)"} pt="10px" borderRadius="10px" >
                                    <Link to={`/singleproduct/${ele._id}`}  ><Tooltip label="Click to see product deatils"><Image className='anim' src={ele.productimage} h="50%" w="90%" m="auto" mt="10px" borderRadius="20px" boxshadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px" /></Tooltip></Link>
                                    <Box textAlign="left" w="90%" m="auto" borderRadius="20px" mt="10px" >
                                        <Text fontSize="20px" fontWeight="extrabold">{ele.productname}</Text>
                                        <Text fontSize="18px" color="blue">{ele.productdesc}</Text>
                                        <Flex gap="10px">
                                            <Text fontSize="30px" fontWeight="semibold" color="#0f1111" lineHeight="normal" mt="20px">₹{ele.productrate}</Text>
                                            <Text fontSize="18px" textDecoration="line-through" color="#565959" mt="30px">₹{ele.productstrikerate}</Text>
                                            <Text fontSize="20px" mt="20px">(20% OFF)</Text>

                                        </Flex >
                                        <Box display="flex" mt="0px">
                                            <Tooltip label="Add to cart">
                                                <Image mt="40px" src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="50px" h="50px" mr="10px"
                                                    onClick={() => handleadd(ele.productimage, ele.productname, ele.productrate, ele.productdesc)} />
                                                {/* { addtocart ?<Button onClick={() => handleadd(ele.productimage, ele.productname, ele.productrate, ele.productdesc)}>Add to Cart</Button>:<Button>Go to Cart</Button>
                                            } */}
                                            </Tooltip>
                                            <Link to={`/checkout/${ele._id}`} style={{ width: "200px" }}><Button w="90%" m="auto" background="#2B558D" borderRadius="0px" color="#FFFFFF" fontWeight="normal" mt="40px" _hover={{ background: "blackAlpha.800", color: "white" }}  >BUY</Button></Link>
                                        </Box>
                                    </Box>
                                </GridItem>
                            </Box>
                        ))

                    }

                </Grid>
            }
            <Button onClick={handleprev} _hover={{ background: "blackAlpha.400" }} background="blackAlpha.400" mr="10px">PREV</Button>

            {/* <Button>{pageno}</Button> */}
            <Button onClick={handlenext} _hover={{ background: "blackAlpha.400" }} background="blackAlpha.400">NEXT</Button>



            <Box>

                <Footer />
            </Box>






        </Box>
    )
}

export default Home