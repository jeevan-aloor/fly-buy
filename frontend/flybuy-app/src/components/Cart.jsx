import { Box, Button, Flex, Image, Text, Heading } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../router/Navbar'
import styles from "./Home.css"

function Cart() {
  const [cartdata, setDate] = useState([])
  const [cartdeletedata, setdeleteDate] = useState([])
  const [total, setTotal] = useState(0)
  const [amount, setAmount] = useState(0)

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
  let sum = 0
  console.log("sum", sum)

  console.log("total", total)

  useEffect(() => {
    getdata()
    // let sum = 0;
    // cartdata.forEach(ele => {
    //   sum += ele.productrate 
    // });
    // setTotal(sum);

  }, [cartdeletedata])




  return (
    <Box>
      <Navbar />
      <Heading mt="30px" mb="30px">MY CART</Heading>
      {

        cartdata.length > 0 && <Flex w="90%" m="auto" background="#F7EDF0">
          <Box w="60%" pl="20px">







            {
              cartdata.length > 0 && cartdata.map((ele) => (



                <Flex w="100%" gap="20px" m="auto" key={ele._id} >



                  <Box w="20%" h="150px" mb="10px">
                    <Image className="cartimage" src={ele.productimage} w="100%" h="100%" />
                  </Box>
                  <Box w="70%" h="150px" textAlign="left" pl="20px" pt="20px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px">
                    <Text fontSize="20px">{ele.productdesc}</Text>
                    <Text fontWeight="bold" fontSize="25px"> ₹{ele.productrate}</Text>
                    <Button mt="10px" ml="200px" onClick={() => handledelete(ele._id)} background="red.400" _hover={{ background: "red.200" }}>Remove from cart</Button>

                  </Box>

                </Flex>


              )
              )
            }
          </Box>



          <Box w="30%" h="10em" pl="10px" boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px" mt="10px" pt="10px">
            <Heading mb="30px" textDecoration="underline">
              Product Total Amount

            </Heading>

            <Flex>
              <Text fontSize="20px" mr="20px">Product total amount  -> </Text>
              <Text fontSize={"25px"} fontWeight="400" textDecoration="underline">
                {/* {
                cartdata.length>0 && cartdata.map((ele)=>setTotal((prev)=>prev+ele.productrate))

               } */}
                {
                  cartdata.length > 0 && cartdata.filter((ele) => {
                    sum += ele.productrate

                    console.log("summm", sum)
                    return

                  })
                }
                ₹{sum}.00rs
              </Text>
            </Flex>

          </Box>

        </Flex>
      }



    </Box>
  )
}

export default Cart