import React from 'react'
import { Link } from 'react-router-dom'
import {
  Box, Image, Input, Text, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Button
} from '@chakra-ui/react'
import { useMediaQuery, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

function Navbar() {
  const [isLesserThan800] = useMediaQuery('(max-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  return (
    <Box w={{ md: "100%", lg: "100%", base: "100%" }} border="1px solid black" >

      <Box border="1px solid red" display="flex" justifyContent="space-evenly" w={{ md: "100%", sm: "100%", base: "100%" }} zIndex="100" background="yellow"  >
        <Image src="https://i.ibb.co/FWBBMbX/Fly-Buy-logo.png" h={{ md: "100px", sm: "80px", base: "60px" }} w={{ md: "100px", sm: "90px", base: "80px" }} />
        <Input w={{ md: "300px", sm: "250px", base: "200px" }} mt={{ sm: "20px", md: "30px", base: "10px" }} />
        {
          isLesserThan800 ? <><Button mt={{ sm: "20px", base: "10px", md: "30px" }} background="black" ref={btnRef} colorScheme='teal' onClick={onOpen}>
            <HamburgerIcon />
          </Button>
            <Drawer
              isOpen={isOpen}
              placement='right'
              onClose={onClose}
              finalFocusRef={btnRef}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader></DrawerHeader>

                <DrawerBody>
                  <Link to="/" style={{ marginTop: "30px" }}>All products</Link><br />
                  <Link to="/cloth" style={{ marginTop: "30px" }}>Cloths</Link><br />
                  <Link to="/shoes" style={{ marginTop: "30px" }}>Shoes</Link><br />
                  <Link to="/watches" style={{ marginTop: "30px" }}>Watches</Link><br />
                  <Image src="https://cdn-icons-png.flaticon.com/128/666/666201.png" w="30px" h="30px" mt="25px" />
                  <Link to="/carts"><Image src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" w="30px" h="30px" mt="25px" /><span>1</span></Link>

                </DrawerBody>

                <DrawerFooter>
                  <Button variant='outline' mr={3} onClick={onClose}>
                    Cancel
                  </Button>

                </DrawerFooter>
              </DrawerContent>
            </Drawer></> : <><Link to="/" style={{ marginTop: "30px" }}>All products</Link>
            <Link to="/cloth" style={{ marginTop: "30px" }}>Cloths</Link>
            <Link to="/shoes" style={{ marginTop: "30px" }}>Shoes</Link>
            <Link to="/watches" style={{ marginTop: "30px" }}>Watches</Link>
            <Image src="https://cdn-icons-png.flaticon.com/128/666/666201.png" w="30px" h="30px" mt="25px" />
            <Link to="/carts"><Image src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" w="30px" h="30px" mt="25px" /><span>1</span></Link></>

        }

      </Box>

    </Box>
  )
}

export default Navbar