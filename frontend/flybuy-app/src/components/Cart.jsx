import { Box, Button, Flex, Image, Text, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../router/Navbar'

function Cart() {
  const [cartdata, setDate] = useState([])
  const [cartdeletedata, setdeleteDate] = useState([])
  const [total, setTotal] = useState(0)

  const getdata = async () => {
    try {
      const res = await axios.get("https://calm-teal-beanie.cyclic.app/cart/cartdata")
      let data = res.data
      setDate(data)
      

    } catch (error) {
      console.log(error)

    }

  }


  const handledelete = async (id) => {
    try {
      setdeleteDate(await axios.delete(`https://calm-teal-beanie.cyclic.app/cart/cartdelete/${id}`))


    } catch (error) {
      console.log(error)

    }

  }



  useEffect(() => {
    getdata()

  }, [cartdata, cartdeletedata])
  let sum = 0;



  return (
    <Box>
      <Navbar />
      <Text>My cart</Text>
      {

        cartdata.length > 0 && <Flex w="90%" border="1px solid red" m="auto" background="#F7EDF0">
          <Box w="60%" pl="20px">







            {
              cartdata.length > 0 && cartdata.map((ele) => (



                <Flex w="100%" gap="20px" m="auto"  >



                  <Box w="20%" border="1px solid red" h="150px" mb="10px">
                    <Image src={ele.productimage} w="100%" h="100%" />
                  </Box>
                  <Box w="70%" border="1px solid red" h="150px" textAlign="left" pl="20px" pt="20px">
                    <Text>{ele.productdesc}</Text>
                    <Text>₹{ele.productrate}</Text>
                    <Button mt="10px" ml="200px" onClick={() => handledelete(ele._id)} background="blue.200" _hover={{ background: "red.200" }}>Remove from cart</Button>

                  </Box>

                </Flex>


              )
              )
            }
          </Box>



          <Box w="30%" border="1px solid red" h="25em">
            <Heading>
              Product Total

            </Heading>
            <Flex>
              <Text>Product total amount</Text>
              <Text>
               {/* {
                cartdata.length>0 && cartdata.map((ele)=>setTotal((prev)=>prev+ele.productrate))

               } */}
              </Text>
            </Flex>

          </Box>

        </Flex>
      }



    </Box>
  )
}

export default Cart