import React, { useEffect, useState } from 'react'
import Navbar from '../router/Navbar'
import axios from 'axios'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

function Shoes() {

  const [shoeData, setData] = useState([])

  const getshoes = async () => {
    try {
      let res = await axios.get("http://localhost:8000/shoes/getshoes")
      setData(res.data)
      console.log(res.data)

    } catch (error) {
      console.log("Error in getting watch data")

    }



  }

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
        <Box border="1px solid red" w="45%">
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/bouncy-img_720x.jpg?v=1634148214" w="100%" h="100%" />
        </Box>
        <Box border="1px solid red" w="45%" pt="150px" pl="20px" textAlign="left">
          <Image src="https://cdn.shopify.com/s/files/1/0549/2926/0637/files/rebound_44f8c81e-6696-4bbb-89a6-7a8b4eda9b0d.jpg?v=1634471175" />
          <Text textAlign="left" fontSize="16px" lineHeight="28px">We’re on a mission to make the world’s best fitting performance sneakers using a fit formula that promotes balance,comfort, and support.</Text>
          <button style={{ background: "red", color: "#FFFFFF", width: "200px", height: "50px", border: "1px solid red", fontWeight: "bold", marginTop: "40px" }}>EXPLORE NOW</button>
        </Box>

      </Flex>
    </Box>
  )
}

export default Shoes