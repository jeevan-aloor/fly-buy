import React from 'react'
import { Box,Flex,Image } from '@chakra-ui/react'

function Footer() {
  return (
    <Flex h="300px"  m="auto" w="800px" border="1px solid red" display={{base:"none",sm:"none"}}  >
        <Image src="https://media2.giphy.com/media/YwNCU8P5jGMNKGG5Bq/200w.webp?cid=ecf05e47axhuwcbngunz3fiyiws23hfslthbjs7oyvewc7rf&rid=200w.webp&ct=g" w={{sm:"30px",base:"90px"}}/>
        <Image src="https://media3.giphy.com/media/9FbLcp4NnluxdR6EyZ/200w.webp?cid=ecf05e47axhuwcbngunz3fiyiws23hfslthbjs7oyvewc7rf&rid=200w.webp&ct=g"/>
        <Image src="https://media3.giphy.com/media/oHgEVQfGJsOvmUfFdP/200w.webp?cid=ecf05e47axhuwcbngunz3fiyiws23hfslthbjs7oyvewc7rf&rid=200w.webp&ct=g"/>


    </Flex>
  )
}

export default Footer