import { Box, Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../router/Navbar'
import Footer from './Footer'

function Womenwatch() {
  const [womensWatchData, setData] = useState([])

  const getWomensWatch = async () => {
    try {
      let res = await axios.get("http://localhost:8000/watch/getwatchwomen")
      setData(res.data)
      console.log(res.data)

    } catch (error) {
      console.log("Error in getting womens watch data")

    }



  }

  useEffect(() => {
    getWomensWatch()

  }, [])
  return (
    <Box background="#2d3142">
      <Box>
        <Navbar />

      </Box>
      <Heading color="#FFFFFF">Welcome for girls watch </Heading>
      <Flex w="80%" m="auto" mt="20px" gap="30px" h="300px"  >
        <Box w="30%"  >
          <Image src="https://i.pinimg.com/236x/dd/06/28/dd06286baf3d902f4b9b922da365f5ac.jpg" w="100%" h="100%" borderRadius="10px 50px 10px 40px" />

        </Box>
        <Box w="30%" >
          <Image src="https://i.pinimg.com/236x/40/5b/d0/405bd095d5851251c2a4fd2693d9ae90.jpg" w="100%" h="100%" borderRadius="50px 0px 40px 10px" />


        </Box>
        <Box w="30%" >
          <Image src="https://i.pinimg.com/236x/b6/58/46/b658460cb388cb18f3637e0d04ef2f8f.jpg" w="100%" h="100%" borderRadius="10px 50px 10px 40px" />


        </Box>
      </Flex>
      <Flex>


        <Box mt="20px" h="300px" w="50%" >
          <Image src="https://i.pinimg.com/236x/cd/1f/6e/cd1f6e2e3e4a03c212d986128451bb07.jpg" borderRadius="100% 0 0 100% / 50%" m="auto" w="70%" h="100%" ml="210px" />
        </Box>
        <Box mt="20px" h="300px" w="50%" >
          <Image src="https://i.pinimg.com/236x/20/c7/b9/20c7b9fbaaac4f8c9f362e49bbf7c6e9.jpg" borderRadius="0 100% 100% 0 / 50%" m="auto" w="70%" h="100%" mr="215px" />
        </Box>
      </Flex>

      <Grid templateColumns="repeat(5,1fr)" m="auto" mt="30px" w="95%" gap="20px" >
        {
          womensWatchData.length > 0 && womensWatchData.map((ele) => (
            <GridItem color="white" textAlign="left" >
              <Image src={ele.watchimage} borderRadius="20px" />
              <Text fontWeight="bold" mt="10px">{ele.watchname}</Text>
              <Text fontWeight="bold">{ele.watchrate}</Text>


            </GridItem>
          ))

        }

      </Grid>

      <Footer/>

    </Box>
  )
}

export default Womenwatch