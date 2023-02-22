import { Box, Heading, Grid, GridItem, Image, Text, Flex, Button, Input } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Carousel from './carousal'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import Navbar from '../router/Navbar'
import Footer from './Footer'


function Cloths() {
  const [searchparams, setSearchparams] = useSearchParams()
  const initialCategory = searchparams.getAll("category")
  const initsort = searchparams.getAll("sorting")
  console.log("initialCategory", initialCategory)
  console.log("initsort", initsort)

  const [clothdata, setdata] = useState([])
  const [category, setCategory] = useState(initialCategory || [])
  const [load,setLoad]=useState(false)




  const [sort, setSort] = useState(initsort[0] || "")
  // console.log(sort)

  const handlecheck = (e) => {

    const newcategory = [...category]

    if (newcategory.includes(e.target.value)) {
      newcategory.splice(newcategory.indexOf(e.target.value), 1)
    } else {
      let name = e.target.value

      if (name === "Men" && newcategory[0] === "Women") {

        newcategory[0] = e.target.value

      } else if (name === "Women" && newcategory[0] === "Men") {
        newcategory[0] = e.target.value
      } else {
        newcategory.push(e.target.value)
      }

    }
    setCategory(newcategory)

  }

  console.log("category", category)


  //  for sorting
  const handleSort = (e) => {
    if(sort=="asc" && e.target.value=="asc"){
      setSort("")

    }else if(sort=="desc" && e.target.value=="desc"){
      setSort("")

    }
    else{

      setSort(e.target.value)
    }
    console.log(sort)

  }





  const getloths = async (category, sort) => {
    setLoad(true)
    if (category == "") {
      console.log("sorttt", sort)
      if(sort==""){
        let res = await axios.get(`https://calm-teal-beanie.cyclic.app/product/getcloths`)
      let data = res.data
      console.log("1", data)
      setdata(data)

      }else{
        let res = await axios.get(`https://calm-teal-beanie.cyclic.app/product/getcloths?sorting=${sort}`)
        let data = res.data
        console.log("1", data)
        setdata(data)
        console.log("sort",sort)
      }
      


    }
    else {
      let res = await axios.get(`https://calm-teal-beanie.cyclic.app/product/getcloths?clothcategory=${category}&& sorting=${sort}`)
      let data = res.data
      console.log("2", data)
      setdata(data)
    }
    setLoad(false)


  }

  useEffect(() => {
    getloths(category, sort)
    let params = {}
    params.category = category
    sort && (params.sorting = sort)
    setSearchparams(params)




  }, [category, searchparams, sort])

{/* <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" /> */}
  return (
    <Box>
      <Box>
      <Navbar />
      <Heading>CLOTHS SECTION</Heading>
      <Box m="auto" mt="20px" border="1px solid red" w="80%" borderRadius="20px" >

        <Carousel />
      </Box>
      <Flex w="100%" gap="10px">
        <Box w="20%" border="1px solid red" mt="80px" h="200px" textAlign="left" pl="30px">
          <Text fontSize="17px" borderBottom="1px solid red" w="100px">CATEGORY</Text>
          <input type="checkbox" value="Men" checked={category.includes("Men")} onChange={handlecheck} />
          <label>Men</label><br />
          <input type="checkbox" value="Women" checked={category.includes("Women")} onChange={handlecheck} />
          <label>Women</label>
          <Text fontSize="17px" borderBottom="1px solid red" w="100px">Sorting</Text>
          <input type="radio" value="asc" name="sortby" onChange={handleSort} checked={sort == "asc"} />
          <label>Low to High</label><br />
          <input type="radio" value="desc" name="sorthigh" onChange={handleSort} checked={sort == "desc"} />
          <label>High to Low</label>


        </Box>
        {
          load ? <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" />:<Grid templateColumns='repeat(4, 1fr)' gap={4} h="500px" w="80%" m="auto" mt="80px" alignItems="end" fontFamily="Times New Roman,serif" >
        
        
          {
            clothdata.length > 0 && clothdata.map((ele) => (
              <GridItem h="100%" w="100%" key={ele._id} fontFamily="Times New Roman,serif">
                <Image src={ele.clothimage} h="60%" />
                <Text fontSize="22px" textAlign="left" fontFamily="Times New Roman,serif">{ele.clothname}</Text>
                <Flex m="auto">
                  <Text fontSize="30px">₹{ele.clothrate}</Text>
                  <Text fontSize="16px" mt="18px" textDecoration="line-through">₹{ele.clothstrikerate}</Text>
                </Flex>
                <Text textAlign="left" ml="20px" color="red" >{ele.clothcategory}</Text>
                <Box display="flex">
                  <Image src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="40px" h="40px" mr="10px" />
                  <Button w="70%" _hover={{ background: "red", color: "white" }}>BUY</Button>
                </Box>

              </GridItem>
            ))
          }

        </Grid>
}
      </Flex>
      </Box>
      
      
      




    </Box>
    
  )
}

export default Cloths