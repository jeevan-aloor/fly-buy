import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Grid, GridItem, Image, Text,Heading } from '@chakra-ui/react'
import Navbar from '../router/Navbar'
import Footer from './Footer'

function Menwatch() {
  const [mensWatchData, setData] = useState([])
  const [load,setLoad]=useState(false)

  const getMensWatch = async () => {
    setLoad(true)
    try {
      let res = await axios.get("http://localhost:8000/watch/getwatchmen")
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
      <Box w="100%" h="600px">
        <Image src="https://www.edox.ch/wp-content/uploads/2022/04/Website_1920x900.jpg" h="100%" w="100%" />

      </Box>
      <Box background="#636363" border="1px solid black" pb="20px">
      <Grid templateColumns="repeat(2, 1fr)" templateRows="repeat(2, 1fr)" w="60%" m="auto" border="1px solid red" h="500px" mt="20px">
        <Box border="1px solid red" background="#d62828" h="100%">

        </Box>
        <Box border="1px solid red">
          <Text fontSize="30px" fontStyle="fester">𝐓𝐢𝐭𝐚𝐧</Text>
          <Text>Get 40% off </Text>

        </Box>
        <Box border="1px solid red">

        </Box>
        <Box border="1px solid red" background="#4361ee" h="100%">

        </Box>

      </Grid>
      </Box>
      <Heading mt="30px">Top watches</Heading>
      {
        load ? <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" /> : <Grid templateColumns="repeat(5, 1fr)" w="90%" m="auto" gap="30px" mt="30px">
         {

         mensWatchData.length>0 && mensWatchData.map((ele)=>(
          <GridItem textAlign="left" boxShadow="rgb(60,60,60) "> 
            <Image src={ele.watchimage} />
            <Text fontWeight="bold">{ele.watchname}</Text>
            <Text fontWeight="semibold">{ele.watchrate}</Text>
          </GridItem>

         )) 
        }
      </Grid>
}
     
      <Footer/>

    </Box>
  )
}

export default Menwatch