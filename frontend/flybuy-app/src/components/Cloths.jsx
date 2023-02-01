import { Box, Heading, Grid, GridItem, Image, Text, Flex, Button } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Carousel from './carousal'
import axios from 'axios'


function Cloths() {
  const [clothdata, setdata] = useState([])

  const getloths = async () => {
    let res = await axios.get("http://localhost:8000/product/getcloths")
    let data = res.data
    setdata(data)

  }
  useEffect(() => {
    getloths()
  }, [])

  console.log("clothdata", clothdata)
  return (
    <Box>
      <Heading>CLOTHS SECTION</Heading>
      <Box m="auto" mt="20px" border="1px solid red" w="80%" borderRadius="20px" >
        <Carousel />
      </Box>
      <Flex w="100%" gap="10px">
        <Box w="20%" border="1px solid red" mt="80px"  h="200px"></Box>
      <Grid templateColumns='repeat(5, 1fr)' gap={2} h="400px" border="1px solid red"  w="80%" m="auto"mt="80px" alignItems="end" >
        {
          clothdata.length > 0 && clothdata.map((ele) => (
            <GridItem h="100%" w="100%" border="1px solid red" background="#CFD7DE">
              <Image src={ele.clothimage} h="70%" />
              <Text fontSize="20px">{ele.clothname}</Text>
              <Flex m="auto">
                <Text fontSize="30px">₹{ele.clothrate}</Text>
                <Text fontSize="16px" mt="18px" textDecoration="line-through">₹{ele.clothstrikerate}</Text>
              </Flex>
              <Box display="flex">
                <Image src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="40px" h="40px" mr="10px" />
                <Button w="70%" _hover={{ background: "red", color: "white" }}>BUY</Button>
              </Box>

            </GridItem>
          ))
        }

      </Grid>
      </Flex>
    
      


    </Box>
  )
}

export default Cloths