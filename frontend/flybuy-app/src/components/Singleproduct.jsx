import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Flex, Grid, GridItem, Image, Text, Button } from '@chakra-ui/react'

function Singleproduct() {
  const [singledata, setdata] = useState([])
  const [quantity, setQuantity] = useState(1)

  const productid = useParams()

  console.log(productid.id)
  const id = productid.id

  const singleproduct = async (id) => {
    let res = await axios.get(`http://localhost:8000/singleproduct/${id}`)
    let data = res.data
    setdata(data)
  }

  const handleadd = () => {
    setQuantity((prev) => prev + 1)
  }
  const handlereduce = () => {
    setQuantity((prev) => prev - 1)
  }



  useEffect(() => {
    singleproduct(id)
  }, [])

  console.log("singledata", singledata)
  return (
    <Box mt="20px">
      <Flex w="90%" h="600px" gap="10px" m="auto">
        {
          singledata.map((ele) => (
            <>
              <Grid w="10%" border="1px solid red" templateColumns='repeat(1, 100%)' >
                <GridItem border="1px solid red"></GridItem>
                <GridItem border="1px solid red"></GridItem>
                <GridItem border="1px solid red"></GridItem>
              </Grid>
              <Box border="1px solid red" w="30%">
                <Image src={ele.productimage} w="100%" h="100%" />
              </Box>
              <Box border="1px solid red" w="50%" textAlign="left" pl="10px">
                <Text>{ele.productname}</Text>
                <Text>{ele.productdesc}</Text>
                <Text>Product-code :{ele._id}</Text>
                <Text>{ele.productrate * quantity}</Text>
                <Text>color-</Text>
                <Text>UK SIZE:PLEASE SELECT</Text>
                <Grid w="150px" templateColumns="repeat(5,1fr)" gap="5px">

                  <Text border="1px solid red" >8</Text>
                  <Text border="1px solid red" >10</Text>
                  <Text border="1px solid red" >12</Text>
                  <Text border="1px solid red" >14</Text>
                  <Text border="1px solid red" >16</Text>

                </Grid>
                <Text>AVAILABILITY:SELECT STYLES FOR AVAILABILITY</Text>
                <Button onClick={handlereduce} disabled={quantity === 0} >-</Button>
                <Button>{quantity}</Button>
                <Button onClick={handleadd}>+</Button>

                <Box border="1px solid red" w="80%" m="auto" textAlign="center" background="#6BA9E6" fontSize="25px" fontStyle="oblique" fontWeight="bold" color="#FFFFFF">OFFER</Box>
              </Box>
            </>
          ))
        }
      </Flex>
    </Box>
  )
}

export default Singleproduct