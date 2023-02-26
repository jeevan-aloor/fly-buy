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
  ModalCloseButton, Modal, FormControl, FormLabel, useToast, InputGroup, InputRightElement
} from '@chakra-ui/react'
import { useMediaQuery, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, ViewIcon } from '@chakra-ui/icons'
import axios from 'axios'

const OverlayOne = () => (
  <ModalOverlay
    bg='blackAlpha.300'
    backdropFilter='blur(10px) hue-rotate(90deg)'
  />
)

function Navbar(props) {
  const { ser, val } = props
  const [isLesserThan800] = useMediaQuery('(max-width: 800px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const [overlay, setOverlay] = React.useState(<OverlayOne />)
  const btnRef = React.useRef()
  const [cartdata, setDate] = useState([])
  const [changes, setls] = useState(false)
  const [name, setName] = useState("")
  const [mobilenumber, setMobile] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmpass, setConfirmpass] = useState("")
  const [show, setShow] = React.useState(false)
  const [showpass, setShowpass] = React.useState(false)
  const [showpasslogin, setShowpasslogin] = React.useState(false)

  const [loginemail, setloginemail] = useState("")
  const [loginpass, setloginpass] = useState("")
  const [response, setResponse] = useState("")
  const [move, setMove] = useState(false)





  const handleClick = () => setShow(!show)
  const handleClickpass = () => setShowpass(!showpass)
  const handleClickpasslogin = () => setShowpasslogin(!showpasslogin)


  const handlesignup = () => {
    setls(true)
  }
  const handlelogin = () => {
    setls(false)
  }
  let useremail = JSON.parse(localStorage.getItem("userEmail"))


  //  alert message for cart page
  const handlealert = () => {
    console.log("jjee")
    if (!useremail) {
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
    // setResponse("")
    // setMove(true)
    localStorage.removeItem("userEmail")
    setloginemail("")
    setloginpass("")
    setEmail("")


    onClose()
    // setTimeout(()=>{
    //   onClose()

    // },2000)


  }

  const handleSearch = (e) => {
    ser(e.target.value)

  }






  const getdata = async () => {
    try {
      const res = await axios.get("https://awful-hen-smock.cyclic.app/cart/cartdata")
      let data = res.data
      setDate(data)

    } catch (error) {
      console.log(error)

    }

  }

  //  for signup 
  const adduserdetail = async () => {
    if (password === confirmpass) {
      const payload = {
        name,
        mobilenumber,
        email,
        password

      }
      if (name && mobilenumber && email) {
        let res = await axios.post("https://awful-hen-smock.cyclic.app/user/adduser", payload)
        console.log("added")
        console.log(res)
        toast({
          title: 'Sucussfully Register',
          description: "Please Login Now",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
        setls(true)

      } else {
        toast({
          title: 'Fill required details',
          description: "please fill those information",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

      }


    } else {
      toast({
        title: 'Password Not matching',
        description: "Please put correct password",
        status: 'error',
        duration: 9000,
        isClosable: true,
      })

    }


  }

  // login


  const adduserlogin = async () => {

    const payload = {
      email: loginemail,
      password: loginpass,
    }
    try {
      console.log("lo", loginemail, loginpass)
      let res = await axios.post("https://awful-hen-smock.cyclic.app/user/userlogin", payload)
      console.log("res", res.data)
      setResponse(res.data)
      console.log("response", response)

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization':  res.data 
        }
      };
      // console.log(payload.email)

      // let addHeader = await axios.post("https://calm-teal-beanie.cyclic.app/user/userlogin", config)



      if (res.data === "not registered") {
        toast({
          title: 'Your not Registerd!',
          description: "Please Register",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

      } else if (res.data == "wrong password") {
        toast({
          title: 'Your password wrong!',
          description: "Please put correct password",
          status: 'error',
          duration: 9000,
          isClosable: true,
        })

      }
      else {
        let token = res.data
        localStorage.setItem("userEmail", JSON.stringify(payload.email))
        localStorage.setItem("token", JSON.stringify(res.data))
        onClose()

      }



    } catch (error) {
      console.log(error)


    }



  }

  useEffect(() => {
    getdata()

  }, [cartdata, changes, response])

  if (move) {
    return <Navigate to="/" />
  }

  return (
    <Box w={{ md: "100%", lg: "100%", base: "100%" }}  >

      <Box display="flex" justifyContent="space-evenly" w={{ md: "100%", sm: "100%", base: "100%" }} zIndex="100" background="#f0cf65"  >
        {/* <Image src="https://i.ibb.co/FWBBMbX/Fly-Buy-logo.png" h={{ md: "100px", sm: "80px", base: "60px" }} w={{ md: "100px", sm: "90px", base: "80px" }} /> */}
        <Link to="/"><Text fontSize={{ md: "50px", sm: "25px", base: "25px" }}>𝕗𝕝𝕪-𝕓𝕦𝕪</Text></Link>
        <Input onChange={handleSearch} value={val} w={{ md: "300px", sm: "250px", base: "200px" }} mt={{ sm: "20px", md: "30px", base: "10px" }} border="2px solid black" h={{ md: "40px", sm: "30px", base: "30px" }} />
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
              // response == "not registered" || response == "" ? 
              !useremail ? <>


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
                  {changes ? <ModalContent>
                    <ModalHeader>Register Here</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      <FormControl isRequired>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' placeholder='Enter Your Full Name' onChange={(e) => setName(e.target.value)} />
                        <FormLabel>Mobile no.</FormLabel>
                        <Input type="number" placeholder='Enter Your Mobile Number' onChange={(e) => setMobile(e.target.value)} />
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder='Enter Your Email address' onChange={(e) => setEmail(e.target.value)} />
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                          <Input
                            pr='4.5rem'
                            type={showpass ? 'text' : 'password'}
                            placeholder='Enter password'
                            onChange={(e) => setPassword(e.target.value)}
                          />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickpass}>
                              {showpass ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                        </InputGroup>

                        <FormLabel>Confirm Password</FormLabel>
                        <InputGroup size='md'>
                          <Input
                            pr='4.5rem'
                            type={show ? 'text' : 'password'}
                            placeholder='Enter password'
                            onChange={(e) => setConfirmpass(e.target.value)}
                          />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                              {show ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                        </InputGroup>

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
                        <InputGroup size='md'>
                          <Input
                            pr='4.5rem'
                            type={showpasslogin ? 'text' : 'password'}
                            placeholder='Enter password'

                            value={loginpass}
                            onChange={(e) => setloginpass(e.target.value)}
                          />
                          <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClickpasslogin}>
                              {showpass ? 'Hide' : 'Show'}
                            </Button>
                          </InputRightElement>
                        </InputGroup>

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
                  {JSON.parse(localStorage.getItem("userEmail"))}


                </Button>
                <Modal isCentered isOpen={isOpen} onClose={onClose}>
                  {overlay}
                  {changes ? <ModalContent>
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

                        <Input placeholder='Enter Your Password' onChange={(e) => setPassword(e.target.value)} ><ViewIcon /></Input>
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


            <Link to={!useremail ? "" : "/carts"}><Image src="https://cdn-icons-png.flaticon.com/128/2038/2038854.png" w="30px" h="30px" mt="25px" onClick={handlealert} /><span>{cartdata.length}</span></Link>
            {
              useremail === "jeevanaloor500@gmail.com" && <Box mt="20px"><Link to="/admin"><Image src="https://img.icons8.com/office/1x/businessman.png" /></Link></Box>
            }


          </>

        }

      </Box>

    </Box>
  )
}

export default Navbar