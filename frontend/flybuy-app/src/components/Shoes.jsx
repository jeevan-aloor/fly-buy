import React, { useEffect, useState } from 'react'
import Navbar from '../router/Navbar'
import axios from 'axios'
import { Box, Flex, Image, Text,Heading, Grid, GridItem } from '@chakra-ui/react'
import styles from './Home.css'
import Footer from './Footer'

function Shoes() {

  const [shoeData, setData] = useState([])
  const [load,setLoad]=useState(false)

  const getshoes = async () => {
    setLoad(true)
    try {
      let res = await axios.get("http://localhost:8000/shoes/getshoes")
      setData(res.data)
      console.log(res.data)

    } catch (error) {
      console.log("Error in getting watch data")

    }
    setLoad(false)



  }
  // <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" />

  useEffect(() => {
    getshoes()

  }, [])
  return (
    <Box>
      <Navbar />
      <Box w="85%" m="auto" mt="20px">
        <Image src="https://lmsin.net/cdn-cgi/image/w=1232,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-10modblock-oneBythree-A-stripBanner1-17Feb2023.jpg" w="100%" h="100%" />

      </Box>
      <Flex w="75%" m="auto" h="500px" mt="20px" gap="20px">
        <Box  w="45%">
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/bouncy-img_720x.jpg?v=1634148214" w="100%" h="100%" />
        </Box>
        <Box  w="45%" pt="150px" pl="20px" textAlign="left">
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/rebound_44f8c81e-6696-4bbb-89a6-7a8b4eda9b0d.jpg?v=1634471175" />
          <Text textAlign="left" fontSize="16px" lineHeight="28px">We’re on a mission to make the world’s best fitting performance sneakers using a fit formula that promotes balance,comfort, and support.</Text>
          <button style={{ background: "red", color: "#FFFFFF", width: "200px", height: "50px", border: "1px solid red", fontWeight: "bold", marginTop: "40px" }}>EXPLORE NOW</button>
        </Box>

      </Flex>
      <Heading fontSize="25px" fontWeight="extrabold" mt="20px" mb="20px" borderBottom="1px solid cyan" w="250px" m="auto">DEALS TO DIE FOR!</Heading>
      <Grid templateColumns="repeat(4,1fr)" w="80%" m="auto"  h="380px" gap="20px" p="20px" >
        <GridItem>
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/3.png?v=1672410872" h="80%" w="100%" className='shoehover' />
          <Text mt="20px">GYM & TRAINING</Text>
          <Text fontSize="20px" fontWeight="extrabold">UPTO 23% OFF</Text>

        </GridItem>
        <GridItem>
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/sandals-001.jpg?v=1637154699" h="80%" w="100%" className='shoehover'/>
          <Text mt="20px">SANDALS & SLIDERS
</Text>
          <Text fontSize="20px" fontWeight="extrabold">UPTO 50% OFF</Text>

        </GridItem>
        <GridItem>
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/training.jpg?v=1634216842" h="80%" w="100%" className='shoehover'/>
          <Text mt="20px">TRAINING SHOES
</Text>
          <Text fontSize="20px" fontWeight="extrabold">UPTO 60% OFF</Text>

        </GridItem>
        <GridItem>
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/running-shoe.jpg?v=1634216842" h="80%" w="100%" className='shoehover'/>
          <Text mt="20px">RUNNING SHOES
</Text>
          <Text fontSize="20px" fontWeight="extrabold">UPTO 70% OFF</Text>

        </GridItem>

      </Grid>
      <Flex w="80%"  h="670px" m="auto" gap="40px" >
        <Box border="1px solid red" w="45%">
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/all-new-img1.jpg?v=1634126475"/>
        </Box>
        <Box border="1px solid red" w="45%">
        <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/all-new-img2.jpg?v=1634126475"/>
        </Box>
      </Flex>
      {
        load ? <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" /> : <Grid templateColumns="repeat(5,1fr)" m="auto" w="90%"  mt="30px" gap="20px" >
        {
          shoeData.length>0 && shoeData.map((ele)=>(
            <GridItem  textAlign="left" boxShadow="rgba(0, 0, 0, 0.15) 0px 5px 15px 0px">
              <Image src={ele.shoeimage} h="70%" w="100%"/>
              <Text fontSize="20px" fontWeight="normal" ml="10px" mt="10px">{ele.shoename}</Text>
              <Text fontSize="25px" fontWeight="semibold" ml="10px">₹{ele.shoerate} <strike style={{fontSize:"15px"}}> ₹{ele.shoestrikerate}</strike></Text>
              <Text fontSize="20px" fontWeight="15px" ml="10px" color="darkgreen" >{ele.shoecategory}</Text>
              

            </GridItem>
          ))

        }
      </Grid>
}
<Box>
  <Footer/>
</Box>
      
      
    </Box>
  )
}

export default Shoes