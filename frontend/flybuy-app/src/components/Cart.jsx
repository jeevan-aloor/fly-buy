import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Cart() {
  const [cartdata, setDate] = useState([])

  const getdata = async () => {
    try {
      const res = await axios.get("http://localhost:8000/cart/cartdata")
      let data = res.data
      setDate(data)

    } catch (error) {
      console.log(error)

    }

  }
  useEffect(() => {
    getdata()

  }, [])


  return (
    <Box>

    </Box>
  )
}

export default Cart