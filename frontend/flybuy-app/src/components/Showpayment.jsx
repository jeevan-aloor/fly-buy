import { Box, Image, HStack, PinInput, PinInputField, Text, Divider, Button, Heading } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Showpayment() {
    const [payment, setPayment] = useState("")
    const [proceed, setProceed] = useState(false)
    const handleSubmit = () => {
        setPayment("loading")
        setTimeout(() => {
            setPayment("done")

        }, 14200)

    }

    useEffect(() => {


    }, [payment])

    return (
        <Box>
            <Text>Please Enter OTP </Text>
            <HStack m="auto" w="200px" mb="20px">
                <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>
            <Button onClick={handleSubmit} mb="50px">Submit</Button>
            <Divider />
            {/* {
                proceed &&
            } */}
            <Box background="black" mt="20px">
                {
                    payment === "loading" && <Image src="https://cdn.dribbble.com/users/88761/screenshots/3029925/sending_payment_loading.gif" w="100%" h="100vh" m="auto" />
                }
                {
                    payment === "done" && <Image src="https://assets.materialup.com/uploads/15c676ac-e724-469c-bad8-077924949947/attachment.png" w="50%" h="100vh" m="auto" />
                }
            </Box>
            <Link to="/"><Heading>GO TO HOME PAGE</Heading></Link>

        </Box>
    )
}

export default Showpayment