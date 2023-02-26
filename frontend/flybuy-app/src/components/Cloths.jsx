import { Box, Heading, Grid, GridItem, Image, Text, Flex, Button, Input, Skeleton, Stack } from '@chakra-ui/react'
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
  const [load, setLoad] = useState(false)




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
    if (sort == "asc" && e.target.value == "asc") {
      setSort("")

    } else if (sort == "desc" && e.target.value == "desc") {
      setSort("")

    }
    else {

      setSort(e.target.value)
    }
    console.log(sort)

  }





  const getloths = async (category, sort) => {
    setLoad(true)
    if (category == "") {
      console.log("sorttt", sort)
      if (sort == "") {
        let res = await axios.get(`https://awful-hen-smock.cyclic.app/product/getcloths`)
        let data = res.data
        console.log("1", data)
        setdata(data)

      } else {
        let res = await axios.get(`https://awful-hen-smock.cyclic.app/product/getcloths?sorting=${sort}`)
        let data = res.data
        console.log("1", data)
        setdata(data)
        console.log("sort", sort)
      }



    }
    else {
      let res = await axios.get(`https://awful-hen-smock.cyclic.app/product/getcloths?clothcategory=${category}&& sorting=${sort}`)
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

  {/* <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" /> */ }
  return (
    <Box background="#E9E4F0">
      <Box >
        {/* position="fixed" w="100%" zIndex="100" mb="100px" */}
        <Box >
          <Navbar />
        </Box>
        <Box mt="10px">
          <Image src="https://images.bestsellerclothing.in/live/image/catalog/brandstore/only/banner/felix_only_webbanner_20230214.png?width=1920&height=760&mode=fill&fill=blur&format=auto" w="100%" m="auto" h="400px" />
        </Box>
        <Heading>CLOTHS SECTION</Heading>
        <Box m="auto" mt="20px" w="80%" borderRadius="20px" >

          <Carousel />
        </Box>
        <Heading mt="70px" textDecoration="Highlight">Get the Best</Heading>
        <Flex w="100%" gap="10px" flexDirection={{ base: "column", md: "column", md: "column", lg: "row" }} mt="20px" >
          <Box w={{ lg: "20%", base: "40%", sm: "40%", md: "40%" }} mt="80px" h="200px" textAlign="left" pl="30px" boxShadow="rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px" background="black" color="#FFFFFF" fontWeight="bold" >
            <Text fontSize="17px" borderBottom="1px solid red" w="100px" mb="10px">CATEGORY</Text>
            <input type="checkbox" value="Men" checked={category.includes("Men")} onChange={handlecheck} mr="50px" />
            <label style={{ fontWeight: "normal", marginLeft: "10px" }}>Men</label><br />
            <input type="checkbox" value="Women" checked={category.includes("Women")} onChange={handlecheck} />
            <label style={{ fontWeight: "normal", marginLeft: "10px" }}>Women</label>
            <Text fontSize="17px" borderBottom="1px solid red" w="100px" mb="10px">Sorting</Text>
            <input type="radio" value="asc" name="sortby" onChange={handleSort} checked={sort == "asc"} />
            <label style={{ fontWeight: "normal", marginLeft: "10px" }}>Low to High</label><br />
            <input type="radio" value="desc" name="sorthigh" onChange={handleSort} checked={sort == "desc"} />
            <label style={{ fontWeight: "normal", marginLeft: "10px" }}>High to Low</label>


          </Box>
          
          {
            load ? <Image src="https://media.tenor.com/YPOStjIfQ2IAAAAM/loading-waiting.gif" h="200px" w="200px" m="auto" /> : <Grid templateColumns={{ lg: 'repeat(4, 1fr)', base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ lg: "20px", base: "10px", md: "15px" }} w="80%" m="auto" mt="80px" alignItems="end" fontFamily="Times New Roman,serif" pl="10px" >


              {
                clothdata.length > 0 && clothdata.map((ele) => (
                  <GridItem h="100%" w={{ md: "100%", base: "80%", sm: "80%", lg: "100%" }} key={ele._id} fontFamily="Times New Roman,serif" boxShadow=" rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" background=" rgb(249 250 251)">
                    <Image w="100%" src={ele.clothimage} h="60%" />
                    <Text fontSize="22px" textAlign="left" fontFamily="Times New Roman,serif" ml="10px" fontWeight="semibold">{ele.clothname}</Text>
                    <Flex m="auto">
                      <Text fontSize="30px" ml="10px">₹{ele.clothrate}</Text>
                      <Text fontSize="16px" mt="18px" textDecoration="line-through" color="red.500">₹{ele.clothstrikerate}</Text>
                    </Flex>
                    <Text textAlign="right" mr="20px" color="red.800" >{ele.clothcategory}</Text>
                    <Box display="flex" ml="10px">
                      <Image src="https://cdn-icons-png.flaticon.com/128/9537/9537227.png" w="40px" h="40px" mr="10px" />
                      <Button w="70%" m="auto" background="#2B558D" borderRadius="0px" color="#FFFFFF" fontWeight="normal" _hover={{ background: "blackAlpha.800", color: "white" }}>BUY</Button>
                    </Box>

                  </GridItem>


                ))
              }

            </Grid>
          }
        </Flex>
      </Box>





      <Footer />

    </Box>

  )
}

export default Cloths