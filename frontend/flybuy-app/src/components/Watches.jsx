import React from 'react'
import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import Navbar from '../router/Navbar'
import { Link } from 'react-router-dom'

function Watches() {
  return (
    <Box >
      <Box position="fixed" w="100%" zIndex={100} >
        <Navbar />
      </Box >
      <Box w="100%" borderTop="1px solid red"  >
        <iframe width="100%" height="608" allow="autoplay" src="https://www.youtube.com/embed/iI2D4LbV6Os?autoplay=1" title="Fake Watch Ad - by Seb" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{ marginTop: "75px" }}></iframe>
      </Box>
      <Flex w="80%" h="400px" m="auto" mt="20px" gap="20px">
        <Box w="50%" h="100%">
          <Link to="/Womenwatch"><Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/Women1_jpg_765x.jpg?v=1649758267" w="100%" h="100%" /></Link>
        </Box>
        <Box w="50%"  >
          <Link to="/Menswatch"><Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/files/men1_jpg_765x.jpg?v=1649758283" h="100%" w="100%" /></Link>
        </Box>
      </Flex>

      <Flex w="70%" h="400px" m="auto" mt="20px" gap="10px">
        <Box w="35%" >
          <Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/products/TW4B16400_360x.jpg?v=1595868176" h="80%" w="100%" />
          <Text>Timex White Dial Men's Watch -TW4B16400</Text>
          <Text>₹ 17,995</Text>

        </Box>
        <Box w="35%" >
          <Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/products/Untitled-1_0037_ME3170-1_360x.jpg?v=1577375677" h="80%" w="100%" />
          <Text>Fossil Townsman Auto Black Dial Men's Watch -ME3170</Text>
          <Text>₹ 3,495</Text>
        </Box>
        <Box w="35%" >
          <Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/products/G270_1_360x.jpg?v=1594056011" h="80%" w="100%" />
          <Text>Casio G-Shock Black Dial Mens Watch-G270</Text>
          <Text>₹ 9,495</Text>
        </Box>
      </Flex>
      <Button background="#2B558D" color="#FFFFFF" border="outset" _hover={{ background: "#2B557D" }} mt="30px">Shop Mens's Watches</Button>
      <Flex w="70%" h="400px" m="auto" mt="40px" gap="10px" >
        <Box w="35%" >
          <Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/products/AP1843A_360x.jpg?v=1584943106" h="80%" w="100%" />
          <Text>Aspen White Dial Women's Watch -AP1843A</Text>
          <Text>₹ 5,597</Text>

        </Box>
        <Box w="35%" >
          <Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/products/IV63Q767_360x.jpg?v=1574183354" h="80%" w="100%" />
          <Text>Danish Design Black Dial Unisex Watch -IV63Q767</Text>
          <Text>₹ 7,485</Text>
        </Box>
        <Box w="35%" >
          <Image src="https://cdn.shopify.com/s/files/1/0046/3454/2129/products/AP1707C1_360x.jpg?v=1572719712" h="80%" w="100%" />
          <Text>Aspen Feminine Exclusive White Dial Women's Watch -AP1707C1</Text>
          <Text>₹ 5,597</Text>
        </Box>
      </Flex>
      <Button background="#2B558D" color="#FFFFFF" border="outset" _hover={{ background: "#2B557D" }} mt="30px">Shop Women's Watches</Button>


    </Box>
  )
}

export default Watches