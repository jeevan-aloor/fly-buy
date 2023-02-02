import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Image, Input,Text } from '@chakra-ui/react'

function Navbar() {
  return (
    <Box  >
      <Box border="1px solid red" display="flex" justifyContent="space-evenly"  w="100%" zIndex="100" background="yellow" >
        <Image src="https://i.ibb.co/FWBBMbX/Fly-Buy-logo.png" h="100px" w="100px" />
        <Input w={300} mt="30px" />
        <Link to="/" style={{ marginTop: "30px" }}>All products</Link>
        <Link to="/cloth" style={{ marginTop: "30px" }}>Cloths</Link>
        <Link to="/shoes" style={{ marginTop: "30px" }}>Shoes</Link>
        <Link to="/watches" style={{ marginTop: "30px" }}>Watches</Link>
        <Image src="https://cdn-icons-png.flaticon.com/128/666/666201.png" w="30px" h="30px" mt="25px" />
        <Link to="/carts"><Image src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" w="30px" h="30px" mt="25px" /><span>1</span></Link>
      </Box>
    </Box>
  )
}

export default Navbar