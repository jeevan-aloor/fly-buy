import { Box, Flex, Input, Text, Image, Heading, RangeSlider, RangeSliderFilledTrack, RangeSliderThumb, RangeSliderTrack, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, AlertDialog, AlertDialogOverlay, AlertDialogContent, useDisclosure, AlertDialogHeader, AlertDialogCloseButton, AlertDialogBody, AlertDialogFooter, Divider, FormLabel, Select, Grid, GridItem, useToast } from '@chakra-ui/react'
import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import Navbar from '../router/Navbar'


function Checkout() {
  const [singledata, setdata] = useState([])
  const [shippingrate, setshiipingrate] = useState(20)
  const [ponitmove, setPoint] = useState(0)
  const [name, setName] = useState("")
  const [mobileno, setMobileno] = useState("")
  const [pincode, setPincode] = useState("")
  const [address, setAddress] = useState("")
  const [state, setState] = useState("")
  const [addressdata, setAddressdata] = useState([])
  const [showdelete, setShowDelete] = useState(false)
  const [showpayment, setPayment] = useState(false)
  const productid = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()
  const toast = useToast()

  const id = productid.id


  const getData = async (id) => {
    let res = await axios.get(`https://awful-hen-smock.cyclic.app/singleproduct/${id}`)
    let data = res.data
    setdata(data)
  }


  const getAddress = async () => {
    let res = await axios.get("https://awful-hen-smock.cyclic.app/address/getaddress")
    let data = res.data
    console.log("data", data)
    setAddressdata(data)
  }

  //  shipping detail

  // const handleadddetail = () => {
  //   setPoint((prev) => prev + 50)


  // }

  //  addding address  

  const addAddress = async () => {
    const payload = {
      name,
      mobileno,
      pincode,
      address,
      state

    }
    if (name !== "" && mobileno !== "" && pincode !== "" && address !== "" && state !== "") {

      await axios.post("https://awful-hen-smock.cyclic.app/address/addaddress", payload)
      console.log("address added")
      toast({
        title: "Please select payment option",
        status: "success",
        isClosable: true,
      })
      setPayment(true)



    } else {

      toast({
        title: "Please put correct values",
        status: "error",
        isClosable: true,
      })



    }



  }

  const handleUseThisaddress = () => {

    if (!showpayment) {
      toast({
        title: "This Address Added succussfully",
        status: "success",
        isClosable: true,
      })

    } else {
      toast({
        title: "Already added this address",
        status: "success",
        isClosable: true,
      })
    }
    setPayment(true)

  }

  const deleteAddress = async (id) => {
    console.log("id", id)
    setShowDelete(!showdelete)
    console.log("show", showdelete)
    try {
      await axios.delete(`https://awful-hen-smock.cyclic.app/address/addressdelete/${id}`)
      console.log("address delete")

    } catch (error) {
      console.log(error)

    }


  }



  useEffect(() => {
    getData(id)
    getAddress()

  }, [ponitmove, showdelete])

  return (
    <Box background="#24272C" >
      <Navbar />
      <Flex color="#FFFFFF" gap="10px" pt="20px">
        <Box w="80%" borderBottom="3px solid #FFFFFF" h="25px" ml="25px"></Box>
        <Heading color="#FFFFFF">Checkout</Heading>
      </Flex>
      <Grid templateColumns={{ lg: "repeat(3,1fr)", base: "repeat(1,1fr)" }} w="90%" m="auto" color="white" gap="30px">
        {
          addressdata.length > 0 && addressdata.map((ele) => (
            <GridItem border="1px solid red" textAlign={"left"} pl="30px" key={ele._id} mb="20px" pb="10px">
              <Text >{ele.name}</Text>
              <Text>{ele.mobileno}</Text>
              <Text>{ele.address}</Text>
              <Text>{ele.state}</Text>
              <Text>{ele.pincode}</Text>
              <Button background="black" border="1px solid #FFFFFF" onClick={handleUseThisaddress}>Use This address</Button>
              <Button background="black" border="1px solid #FFFFFF" onClick={() => deleteAddress(ele._id)}>Delete this address</Button>

            </GridItem>



          ))
        }
      </Grid>
      <Box w="80%" m="auto">
        <RangeSlider
          aria-label={['min', 'max']}
          colorScheme='pink'
          defaultValue={[0, ponitmove]}
        >
          <RangeSliderTrack>
            <RangeSliderFilledTrack />
          </RangeSliderTrack>
          <RangeSliderThumb index={1} >1</RangeSliderThumb>
          <RangeSliderThumb index={1} />
        </RangeSlider>
      </Box>
      {/* backgroundImage="https://images.pexels.com/photos/8971727/pexels-photo-8971727.jpeg?auto=compress&cs=tinysrgb&w=600" */}
      <Flex gap="50px" mt="50px" color="#FFFFFF" fontFamily="emoji" flexDirection={{ base: "column", lg: "row" }}>
        <Box w={{ lg: "600px", base: "100px", md: "700px" }} h={{ lg: "1000px", base: "1200px", md: "1100px" }} ml="30px" textAlign="left" pl="70px" fontFamily="cursive" background="#274046">
          <Box color="black">
            <Text textAlign={"center"} fontSize="30px" color="#00a6fb" mb="20px" textDecoration={"dotted"} fontFamily="cursive">Please fill out information</Text>
            <Text ml="40px" color="#fe7f2d" fontSize="20px" >Enter Your Name</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" background="#fdc5f5" onChange={(e) => setName(e.target.value)} />
            <Text ml="40px" fontSize="20px" color="#fe7f2d">Enter 10-digit Mobile number</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" placeholder='Enter phone number' background="#fdc5f5" onChange={(e) => setMobileno(e.target.value)} />
            <Text ml="40px" fontSize="20px" color="#fe7f2d">Pincode</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" background="#fdc5f5" onChange={(e) => setPincode(e.target.value)} />
            <Text ml="40px" fontSize="20px" color="#fe7f2d">Locality</Text>

            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" background="#fdc5f5" />
            <Text ml="40px" fontSize="20px" color="#fe7f2d" >Address (Area and street)</Text>

            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} h="100px" pt="0px" ml="40px" mb="20px" background="#fdc5f5" onChange={(e) => setAddress(e.target.value)} />
            <Text ml="40px" fontSize="20px" color="#fe7f2d">City/District/Town</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" background="#fdc5f5" />
            <Text ml="40px" fontSize="20px" color="#fe7f2d">State</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" placeholder='jdjdd' background="#fdc5f5" onChange={(e) => setState(e.target.value)} />
            <Text ml="40px" fontSize="20px" color="#fe7f2d">Landmark (Optional)</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" background="#fdc5f5" />
            <Text ml="40px" fontSize="20px" color="blue">Alternate phone number (Optional)</Text>
            <Input w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" mr="40px" mb="20px" background="#fdc5f5" />
            <Button w={{ lg: "400px", base: "150px", sm: "450px", md: "500px" }} ml="40px" background="black" color="white" onClick={addAddress}>Use this address</Button>

          </Box>
        </Box>
        {/* border="1px solid red" */}
        {showpayment && <Box w={{ lg: "400px", base: "100%", sm: "100%", md: "100%" }} h={{ lg: "800px", base: "500px", sm: "400px", md: "400px" }} border="1px solid red" >
          <Text fontSize="20px">Select a payment methode</Text>
          <Box mb="30px">

            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      <input type="radio" style={{ marginRight: "10px" }} />
                      <label>pay with debit.credit card</label>
                      <Text>You can save your cards as per new RBI guidelines.Learn More</Text>
                      <Flex gap="10px" m="auto" w="80%">
                        <Image src="data:image/jpeg;base64,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" width="50px" h="25px" />
                        <Image src="data:image/jpeg;base64,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" w="50px" h="25px" />
                        <Image src="data:image/jpeg;base64,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" w="50px" h="25px" />
                        <Image src="data:image/png;base64,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" w="50px" h="25px" />
                        <Image src="data:image/jpeg;base64,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" w="50px" h="25px" />
                      </Flex>
                    </Box>
                    {/* <AccordionIcon /> */}
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <>
                    <Button onClick={onOpen} border="none" background="24272C" _hover={{
                      background
                        : "none"
                    }} color="blue.300" textDecoration="underline" >Enter card Details</Button>
                    <AlertDialog
                      motionPreset='slideInBottom'
                      leastDestructiveRef={cancelRef}
                      onClose={onClose}
                      isOpen={isOpen}
                      isCentered
                    >
                      <AlertDialogOverlay />

                      <AlertDialogContent>
                        <AlertDialogHeader>Enter card Details</AlertDialogHeader>
                        <Divider />
                        <AlertDialogCloseButton />
                        <AlertDialogBody>
                          <Flex>
                            <FormLabel>
                              Card number
                            </FormLabel>
                            <Input w="70%" m="auto" />
                          </Flex>
                          <Flex mt="10px">
                            <FormLabel>
                              Name on card
                            </FormLabel>
                            <Input w="70%" />
                          </Flex>
                          <Flex mt="10px" gap="20px">
                            <FormLabel>
                              Expiry date
                            </FormLabel>
                            <Select w="15%">
                              <option value='1'> 01</option>
                              <option value='2'> 02</option>
                              <option value='3'> 03</option>
                              <option value='4'> 04</option>
                              <option value='5'> 05</option>
                              <option value='6'> 06</option>
                              <option value='7'> 07</option>
                              <option value='8'> 08</option>
                              <option value='9'> 09</option>
                              <option value='10'> 10</option>
                              <option value='11'> 11</option>
                              <option value='12'> 12</option>
                            </Select>
                            <Select w="25%">
                              <option value='1'> 2023</option>
                              <option value='2'> 2024</option>
                              <option value='3'> 2025</option>
                              <option value='4'> 2026</option>
                              <option value='5'> 2027</option>
                              <option value='6'> 2028</option>
                              <option value='7'> 2029</option>
                              <option value='8'> 2030</option>
                              <option value='9'> 2031</option>
                              <option value='10'> 2032</option>
                              <option value='11'> 2033</option>
                              <option value='12'> 2034</option>


                            </Select>

                          </Flex>

                        </AlertDialogBody>
                        <AlertDialogFooter>
                          <Button ref={cancelRef} onClick={onClose}>
                            cancel
                          </Button>
                          <Link to="/payment"><Button colorScheme='red' ml={3} >
                            proceed
                          </Button></Link>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </>

                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          </Box >
          <Flex mb="5px">
            <input type="radio" style={{ marginRight: "10px", marginLeft: "15px" }} />
            <FormLabel> Net Banking</FormLabel>
          </Flex>
          <Select w="40%" ml="20px" mb="20px">
            <option>Choose an option</option>
            <option value='1'>Airtel Payments Bank
            </option>
            <option>Axis Bank
            </option>
            <option>HDFC Bank
            </option>
            <option>ICICI Bank
            </option>
            <option>Bank of Baroda</option>
            <option>Kotak Bank
            </option>
            <option>State Bank of India
            </option>
            <option>Allahabad Bank
            </option>
            <option>Andhra Bank
            </option>
            <option>Bank of India
            </option>
            <option>Bank of Maharashtra
            </option>
          </Select>
          <Accordion mb="20px">
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box as="span" flex='1' textAlign='left'>
                    <input type="radio" style={{ marginRight: "10px" }} />
                    <label>other upi apps</label>

                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Text>please enter your upi id</Text>
                <Flex gap="20px">
                  <Input w="50%" placeholder='Ex:Mobilenumber@upi ' />
                  <Button background="orange" _hover={{ background: "orange" }}>Verify</Button>
                </Flex>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Box textAlign='left'>
            <input type="radio" style={{ marginRight: "10px" }} />
            <label>Cash on Delivery</label>
            <Text>Scan & Pay using Amazon app. Cash, UPI ,Cards also accepted.Know more.</Text>

          </Box>

        </Box>
        }
        <Box w={{ lg: "300px", base: "90%", md: "90%" }} h="400px" pl="10px" boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" background="#0A261F" mr="20px" fontFamily="serif" m={{ base: "auto", md: "auto", lg: "0px" }}  >
          <Box w="100%" h="40px" mt="5px" mb="15px">
            <Text fontSize="25px">Product Summary</Text>
          </Box>
          {
            singledata.length > 0 && singledata.map((ele) => (
              <Box key={ele._id}> <Flex fontFamily="serif" >
                <Image src={ele.productimage} w="50px" h="50px" />
                <Text fontFamily="serif" fontSize="18px" >{ele.productdesc}</Text>
              </Flex>
                <Text textAlign="left" borderBottom="1px solid black" mt="20px">Total Savings : {ele.productstrikerate - ele.productrate}</Text>
                <Flex gap="150px" mt="20px" fontFamily="serif" >
                  <Text >Subtotal</Text>
                  <Text>₹{ele.productrate}.00</Text>
                </Flex>
                <Flex gap="150px" mt="20px">
                  <Text>Shipping</Text>
                  <Text>₹{shippingrate}.00</Text>
                </Flex>
                <Flex gap="190px" mt="20px">
                  <Text>Tax</Text>
                  <Text>₹0.00</Text>
                </Flex>

                <Flex gap="160px" borderBottom="1px solid red" borderTop="1px solid red" mt="20px">
                  <Text fontSize="25px" fontWeight="extrabold">Total</Text>
                  <Text fontSize="20px" fontWeight="bold">₹{ele.productrate + shippingrate}</Text>
                </Flex>
              </Box>
            ))
          }
        </Box>
      </Flex>
    </Box>
  )
}

export default Checkout