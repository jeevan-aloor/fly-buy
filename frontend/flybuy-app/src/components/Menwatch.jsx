import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Grid, GridItem, Image, Text, Heading, Button } from '@chakra-ui/react'
import Navbar from '../router/Navbar'
import Footer from './Footer'

function Menwatch() {
  const [mensWatchData, setData] = useState([])
  const [load, setLoad] = useState(false)

  const getMensWatch = async () => {
    setLoad(true)
    try {
      let res = await axios.get("https://calm-teal-beanie.cyclic.app/watch/getwatchmen")
      setData(res.data)

    } catch (error) {
      console.log("Error in getting watch data")

    }
    setLoad(false)



  }

  useEffect(() => {
    getMensWatch()

  }, [])
  return (
    <Box >
      <Box>
        <Navbar />
      </Box>
      <Box w="100%" h={{ lg: "600px", base: "300px", md: "400px" }}>
        <Image src="https://www.edox.ch/wp-content/uploads/2022/04/Website_1920x900.jpg" h="100%" w="100%" />

      </Box>
      <Box background="rgb(248 250 252)" pb="20px">
        <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" w="60%" m="auto" h={{ lg: "500px", base: "300px", md: "400px" }} mt="20px">
          <Box background="#d62828" h="100%">

          </Box>
          <Box textAlign={"center"} background={"transparent"}>
            <Text fontSize="40px" fontStyle="fester" mt="50px">𝐓𝐢𝐭𝐚𝐧</Text>
            <Text>GET 40% OFF </Text>

          </Box>
          <Box textAlign={"center"} background={"transparent"}>
            <Text fontSize="40px" fontStyle="fester" mt="50px">Fossil</Text>
            <Text>GET 20% OFF </Text>


          </Box>
          <Box background="#4361ee" h="100%">

          </Box>

        </Grid>
      </Box>
      <Heading mt="30px">Top watches</Heading>
      {
        load ? <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" /> : <Grid templateColumns={{ lg: "repeat(5, 1fr)", base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }} w="90%" m="auto" gap={{ lg: "30px", base: "40px", md: "30px" }} mt="30px">
          {

            mensWatchData.length > 0 && mensWatchData.map((ele) => (
              <GridItem textAlign="left" boxShadow="rgb(60,60,60) ">
                <Image src={ele.watchimage} mb={{ lg: "10px", base: "0px" }} w="95%" h="70%" />
                <Text mb="15px" textAlign="center">{ele.watchname}</Text>
                <Text fontWeight="semibold" mb="15px" textAlign="center">₹{ele.watchrate}</Text>
                <Button w="90%" m="auto" background="#2B558D" borderRadius="0px" color="#FFFFFF" fontWeight="normal">Buy now</Button>
              </GridItem>

            ))
          }
        </Grid>
      }

      <Footer />

    </Box>
  )
}

export default Menwatch