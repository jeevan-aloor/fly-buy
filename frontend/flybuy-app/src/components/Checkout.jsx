import { Box, Flex, Input, Text, Image, Heading } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Navbar from '../router/Navbar'

function Checkout() {
  const [singledata, setdata] = useState([])
  const [shippingrate, setshiipingrate] = useState(20)
  const productid = useParams()
  console.log(productid)
  const id = productid.id


  const cartproduct = async (id) => {
    let res = await axios.get(`http://localhost:8000/checkoutdata/${id}`)
    let data = res.data
    setdata(data)
  }
  useEffect(() => {
    cartproduct(id)

  }, [])

  return (
    <Box background="#24272C" >
      <Navbar/>
      <Flex color="#FFFFFF" gap="10px" pt="20px">
        <Box w="80%" borderBottom="3px solid #FFFFFF" h="25px" ml="25px"></Box>
        <Heading color="#FFFFFF">Checkout</Heading>
      </Flex>
    <Flex gap="50px" mt="50px" color="#FFFFFF">
      <Box  w="600px" h="1000px" border="1px solid red" ml="30px" textAlign="left" pl="70px"  >
        <Text ml="40px">Enter Your Name</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" />
        <Text ml="40px">Enter 10-digit Mobile number</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" placeholder='jdjdd' />
        <Text ml="40px">Pincode</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" />
        <Text ml="40px">Locality</Text>

        <Input w="400px" ml="40px" mr="40px" mb="20px" />
        <Text ml="40px">Address (Area and street)</Text>

        <Input w="400px" h="100px" pt="0px" ml="40px" mb="20px" />
        <Text ml="40px">City/District/Town</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" />
        <Text ml="40px">State</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" placeholder='jdjdd' />
        <Text ml="40px">Landmark (Optional)</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" />
        <Text ml="40px">Alternate phone number (Optional)</Text>
        <Input w="400px" ml="40px" mr="40px" mb="20px" />


      </Box>
      <Box w="400px" border="1px solid red" h="800px"></Box>
      <Box w="300px" h="400px" pl="10px" boxShadow= "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" background="#0A261F" mr="20px" >
        <Box w="100%" h="40px" border="1px solid red">
          <Text>Product Summary</Text>
        </Box>
        {
          singledata.length > 0 && singledata.map((ele) => (
            <> <Flex>
              <Image src={ele.productimage} w="50px" h="50px" />
              <Text>{ele.productdesc}</Text>
            </Flex>
              <Text textAlign="left" borderBottom="1px solid black" mt="10px">Total Savings : {ele.productstrikerate - ele.productrate}</Text>
              <Flex gap="150px">
                <Text>Subtotal</Text>
                <Text>₹{ele.productrate}.00</Text>
              </Flex>
              <Flex gap="150px">
                <Text>Shipping</Text>
                <Text>₹{shippingrate}.00</Text>
              </Flex>
              <Flex gap="190px" borderBottom="1px solid red">
                <Text>Tax</Text>
                <Text>₹0.00</Text>
              </Flex>

              <Flex gap="160px" borderBottom="1px solid red">
                <Text fontSize="25px" fontWeight="extrabold">Total</Text>
                <Text fontSize="20px" fontWeight="bold">₹{ele.productrate + shippingrate}</Text>
              </Flex>
            </>
          ))
        }
      </Box>
    </Flex>
    </Box>
  )
}

export default Checkout