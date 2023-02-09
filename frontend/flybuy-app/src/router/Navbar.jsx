import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import {
  Box, Image, Input, Text, Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Button, ModalOverlay, ModalContent, ModalHeader, ModalFooter,
  ModalBody,
  ModalCloseButton, Modal, FormControl, FormLabel, useToast
} from '@chakra-ui/react'
import { useMediaQuery, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import axios from 'axios'

const OverlayOne = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
  />
)

function Navbar() {
  const [isLesserThan800] = useMediaQuery('(max-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const btnRef = React.useRef()
  const [cartdata, setDate] = useState([])
  const [changels, setls] = useState(false)
  const [name, setName] = useState("")
  const [mobilenumber, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")

  const [loginemail, setloginemail] = useState("")
  const [loginpass, setloginpass] = useState("")
  const [response, setResponse] = useState("")
  const [move, setMove] = useState(false)







  const handlesignup = () => {
    setls(true)
  }
  const handlelogin = () => {
    setls(false)
  }

  //  alert message for cart page
  const handlealert = () => {
    console.log("jjee")
    if (response == "") {
      toast({
        title: 'Please Login',
        description: "You have to login first! Please Login",
        status: 'success',
        duration: 9000,
        isClosable: true,
      })

    }


  }

  // logout function 

  const handlelogout = () => {
    setResponse("")
    setMove(true)
    onClose()
  }






  const getdata = async () => {
    try {
      const res = await axios.get("https://vast-gold-fox-slip.cyclic.app/cart/cartdata")
      let data = res.data
      setDate(data)

    } catch (error) {
      console.log(error)

    }

  }

  //  for signup 
  const adduserdetail = async () => {
    const payload = {
      name,
      mobilenumber,
      email,
      password

    }
    let res = await axios.post("http://localhost:8000/user/adduser", payload)
    console.log("added")
    console.log(res)
    toast({
      title: 'Sucussfully Register',
      description: "Please Login Now",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })

  }

  // login


  const adduserlogin = async () => {

    const payload = {
      email: loginemail,
      password: loginpass
    }
    console.log("lo", loginemail, loginpass)
    let res = await axios.post("http://localhost:8000/user/userlogin", payload)
    console.log(res.data)
    setResponse(res.data)
    localStorage.setItem("token", JSON.stringify(res.data))
    let neha = await axios.post("http://localhost:8000/user/userlogin", {
      headers: {
        Authorization: `Bearer ${res.data}`
      }
    })
    console.log(neha)
    console.log("login")
    onClose()


  }

  useEffect(() => {
    getdata()

  }, [cartdata, changels, response])

  if (move) {
    return <Navigate to="/" />
  }

  return (
    <Box w={{ md: "100%", lg: "100%", base: "100%" }}  >

      <Box display="flex" justifyContent="space-evenly" w={{ md: "100%", sm: "100%", base: "100%" }} zIndex="100" background="#f0cf65"  >
        {/* <Image src="https://i.ibb.co/FWBBMbX/Fly-Buy-logo.png" h={{ md: "100px", sm: "80px", base: "60px" }} w={{ md: "100px", sm: "90px", base: "80px" }} /> */}
        <Text fontSize="50px">𝕗𝕝𝕪-𝕓𝕦𝕪</Text>
        <Input w={{ md: "300px", sm: "250px", base: "200px" }} mt={{ sm: "20px", md: "30px", base: "10px" }} border="2px solid black" />
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
                  <Link to="/carts"><Image src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" w="30px" h="30px" mt="25px" /><span>{cartdata.length}</span></Link>

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
            {
              response == "not registered" || response == "" ? <>


                <Button
                  onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                  }}
                  background="none"
                  mt="18px"
                  _hover={{ background: "none" }}
                >
                  <Image src="https://cdn-icons-png.flaticon.com/128/666/666201.png" w="30px" h="30px" />

                </Button>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                  {overlay}
                  {changels ? <ModalContent>
                    <ModalHeader>Register Here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Enter Your Full Name' onChange={(e) => setName(e.target.value)} />
                        <FormLabel>Mobile no.</FormLabel>
                        <Input placeholder='Enter Your Mobile Number' onChange={(e) => setMobile(e.target.value)} />
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Enter Your Email address' onChange={(e) => setEmail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                        <FormLabel>Confirm Password</FormLabel>
                        <Input placeholder='Enter Your Password' onChange={(e) => setConfirmpass(e.target.value)} />
                        <Text>Already Have Account please  <Button color="blue" h="20px" background="none" _hover={{ background: "none" }} onClick={handlelogin}>Login Here</Button></Text>

                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={adduserdetail} >Register</Button>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent> : <ModalContent>
                    <ModalHeader>Login Here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl isRequired>
                        <FormLabel>Eamil</FormLabel>
                        <Input placeholder='First name' value={loginemail} onChange={(e) => setloginemail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='First name' value={loginpass} onChange={(e) => setloginpass(e.target.value)} />
                        <Text>If your not Registerd please  <Button color="blue" h="20px" background="none" _hover={{ background: "none" }} onClick={handlesignup}>Register Here</Button></Text>

                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={adduserlogin}>Login</Button>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>}

                </Modal>
              </> : <>
                <Button
                  onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                  }}
                  background="none"
                  mt="18px"
                  _hover={{ background: "none" }}
                >
                  {loginemail}

                </Button>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                  {overlay}
                  {changels ? <ModalContent>
                    <ModalHeader>Register Here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input placeholder='Enter Your Full Name' onChange={(e) => setName(e.target.value)} />
                        <FormLabel>Mobile no.</FormLabel>
                        <Input placeholder='Enter Your Mobile Number' onChange={(e) => setMobile(e.target.value)} />
                        <FormLabel>Eamil</FormLabel>
                        <Input placeholder='Enter Your Email address' onChange={(e) => setEmail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <Input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} />
                        <FormLabel>Confirm Password</FormLabel>
                        <Input placeholder='Enter Your Password' onChange={(e) => setConfirmpass(e.target.value)} />
                        <Text>Already Have Account please  <Button color="blue" h="20px" background="none" _hover={{ background: "none" }} onClick={handlelogin}>Login Here</Button></Text>

                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={adduserdetail} >Register</Button>
                      <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent> : <ModalContent>
                    <ModalHeader>Want Logout?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <Button onClick={handlelogout}>LOGOUT</Button>
                    </ModalBody>

                  </ModalContent>}

                </Modal>

              </>
            }


            <Link to={response == "" || response == "" ? "" : "/carts"}><Image src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" w="30px" h="30px" mt="25px" onClick={handlealert} /><span>{cartdata.length}</span></Link>


          </>

        }

      </Box>

    </Box>
  )
}

export default Navbar