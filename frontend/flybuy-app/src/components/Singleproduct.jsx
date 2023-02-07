import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import { Box, Flex, Grid, GridItem, Image, Text, Button, Tooltip } from '@chakra-ui/react'

function Singleproduct() {
  const [singledata, setdata] = useState([])
  const [quantity, setQuantity] = useState(1)

  const productid = useParams()

  console.log(productid.id)
  const id = productid.id

  const singleproduct = async (id) => {
    let res = await axios.get(`https://vast-gold-fox-slip.cyclic.app/singleproduct/${id}`)
    let data = res.data
    setdata(data)
  }

  const handleadd = () => {
    setQuantity((prev) => prev + 1)
  }
  const handlereduce = () => {
    if (quantity != 1) {

      setQuantity((prev) => prev - 1)
    }
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
                <GridItem border="1px solid red">
                  <Image src={ele.productimage2} h="100%" />
                </GridItem>
                <GridItem border="1px solid red">
                  <Image src={ele.productimage3} h="100%" /></GridItem>
                <GridItem border="1px solid red">
                  <Image src={ele.productimage4} h="100%" />
                </GridItem>
              </Grid>
              <Box border="1px solid red" w="30%">
                <Image src={ele.productimage} w="100%" h="100%" />
              </Box>
              <Box border="1px solid red" w="50%" textAlign="left" pl="10px">
                <Text fontSize="20px">{ele.productname}</Text>
                <Text fontSize="30px">{ele.productdesc}</Text>
                <Text fontSize="15px" color="#CE9F79">Product-code :{ele._id}</Text>
                <Flex gap="10px">
                  <Text fontSize="30px" color="#9E2648">₹{ele.productrate * quantity}</Text>
                  <Text fontSize="30px" color="#9E2648">({ele.productoffer})</Text>
                  <Text fontSize="18px" color="#9E2648" mt="20px" textDecoration="line-through" >₹{ele.productstrikerate}</Text>

                </Flex>
                <Text>COLOR-Black</Text>
                <Box w="20px" h="20px" border="1px solid black" p="1px">
                  <Box w="14px" h="16px" m="auto" background="black" ></Box>
                </Box>
                <Text mt="10px">UK SIZE:PLEASE SELECT</Text>
                <Grid w="150px" templateColumns="repeat(5,1fr)" gap="5px" textAlign="center" mb="10px">

                  <Text border="1px solid #303234" >8</Text>
                  <Text border="1px solid #303234" >10</Text>
                  <Text border="1px solid #303234" >12</Text>
                  <Text border="1px solid #303234" >14</Text>
                  <Text border="1px solid #303234" >16</Text>

                </Grid>
                <Text mb="20px">AVAILABILITY:SELECT STYLES FOR AVAILABILITY</Text>
                <Flex >
                  <Box mr="20px" fontWeight="extrabold" pt="7px">QUANTITY</Box>
                  <Box>

                    <Button onClick={handlereduce} background="#07294C" color="#FFFFFF" >-</Button>
                    <Button background="#FFFFFF" color="balck">{quantity}</Button>
                    <Button onClick={handleadd} background="#07294C" color="#FFFFFF">+</Button>
                  </Box>
                  <Box>
                    <Link to="/carts"><Button ml="150px" w="200px">BUY NOW</Button></Link>
                  </Box>
                </Flex>

                <Box borderRadius="10px" w="80%" m="auto" textAlign="center" background="#6BA9E6" fontSize="25px" fontStyle="oblique" fontWeight="bold" color="#FFFFFF" mt="30px">{ele.productoffer} EVERYTHING</Box>
                <Flex gap="20px" ml="60px" mt="20px">
                  <Box>
                    <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png" w="40px" m="auto" />
                    <Text color="#454A4B" fontSize="15px">Free Delivery</Text>
                  </Box>
                  <Box>
                    <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png" w="40px" m="auto" />
                    <Text color="#454A4B" fontSize="15px">Pay on Delivery</Text>
                  </Box>
                  <Box>
                    <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-returns._CB484059092_.png" w="40px" m="auto" />
                    <Text color="#454A4B" fontSize="15px">7 days Replacement</Text>
                  </Box>
                  <Box>
                    <Image src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png" w="40px" m="auto" />
                    <Text color="#454A4B" fontSize="15px">Amazon Delivered</Text>
                  </Box>

                </Flex>
              </Box>
            </>
          ))
        }
      </Flex>

    </Box>
  )
}

export default Singleproduct