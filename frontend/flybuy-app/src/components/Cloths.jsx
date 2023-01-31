import { Box, Heading,Grid, GridItem,Image,Text } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react'
import Carousel from './carousal'
import axios from  'axios'


function Cloths() {
  const [clothdata,setdata]=useState([])

  const getloths=async()=>{
    let res=await axios.get("http://localhost:8000/product/getcloths")
    let data=res.data
    setdata(data)

  }
  useEffect(() => {
    getloths()
  }, [])

  console.log("clothdata",clothdata)
  return (
    <Box>
      <Heading>CLOTHS SECTION</Heading>
      <Box m="auto" mt="20px" border="1px solid red" w="80%" borderRadius="20px" >
        <Carousel />
      </Box>
      <Grid templateColumns='repeat(6, 1fr)' gap={2} h="250px" border="1px solid red" mt="80px">
        {
          clothdata.length>0 && clothdata.map((ele)=>(
            <GridItem h="100%" w="100%" border="1px solid red">
              <Image src={ele.clothimage}/>
              <Text>{ele.clothname}</Text>

            </GridItem>
          ))
        }
  
      </Grid>


    </Box>
  )
}

export default Cloths