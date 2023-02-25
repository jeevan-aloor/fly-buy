import React from 'react'
import { Box, Divider, Flex, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
      
    <Box h="540px" background="#000000" pt="20px" mt="100px">
      <Box color="#FFFFFF" >
        <Text textAlign="left" pl="30px" fontWeight="bold">Fly-buy Site Links</Text>
        <Flex w="100%" h="160px" mb="30px" pl="30px">
          <Box w="30%" textAlign="left" lineHeight="40px">
            <Text>Contacy us</Text>
            <Text>About us</Text>
            <Text>Directions</Text>
            <Text>Blog</Text>
          </Box>
          <Box w="30%" textAlign="left" lineHeight="40px">
            <Text>Promotions</Text>
            <Text>Partners</Text>
            <Text>Careers</Text>
            <Text>FAQs</Text>
          </Box>
          <Box w="30%" textAlign="left" lineHeight="40px">
            <Link to="/"><Text>All product</Text></Link>
            <Link to="/shoes"><Text>Shoes</Text></Link>
            <Link to="/cloth"><Text>Cloths</Text></Link>
           <Link to="/watches"><Text>Watches</Text></Link>
          </Box>
         
          <Box w="30%" textAlign="left" lineHeight="40px" display={{lg:"block",base:"none",sm:"none",md:"none"}}>
            <Flex gap="20px">
            <Image src="https://img.icons8.com/ios/1x/instagram-new--v2.gif" alt="insta" w="40px" h="40px"/>
            <Image src="https://img.icons8.com/ios/1x/facebook--v2.gif" alt="insta" w="40px" h="40px"/>
            <Image src="https://img.icons8.com/color/1x/twitter--v2.gif" alt="insta" w="40px" h="40px"/>
            <Image src="https://img.icons8.com/ios-filled/1x/pinterest--v5.gif" alt="insta" w="40px" h="40px"/>
            </Flex>
            <Text display={{lg:"block",base:"none",sm:"none",md:"none"}}>DOWNLOAD WORLD OF FLY-BUY APP</Text>
            <Flex gap="20px" display={{lg:"flex",base:"none",sm:"none",md:"none"}}>
            <Image src="https://www.fastrack.in/wps/wcm/connect/fastrackrt/2872109e-ec2b-4cd4-9aaa-da1cdb6c178a/app-store.svg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0L8F0647TQN6318K2-2872109e-ec2b-4cd4-9aaa-da1cdb6c178a-oizdyqz" w="150px" h="50px"/>
            <Image src="https://www.fastrack.in/wps/wcm/connect/fastrackrt/2872109e-ec2b-4cd4-9aaa-da1cdb6c178a/app-store.svg?MOD=AJPERES&amp;CACHEID=ROOTWORKSPACE.Z18_90IA1H80O0L8F0647TQN6318K2-2872109e-ec2b-4cd4-9aaa-da1cdb6c178a-oizdyqz" w="150px" h="50px"/>
            </Flex>
          </Box>
          

        </Flex>
      </Box>
      {/* <Divider /> */}
      {/* filter="blur(0.6px)" */}
      <Box h="300px" background="#FFFFFF" mt="20px" pl="100px" w="100%"  >
        <Text fontSize="30px">Our partners</Text>
        <marquee >
          <Flex gap="100px" mt="20px" >

            <Image src="https://cdn3.iconfinder.com/data/icons/picons-social/57/67-amazon-64.png" w="70px" h="70px" />
            <Image src="https://cdn1.iconfinder.com/data/icons/social-media-glossy/512/63-nike_social-64.png" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Gucci-64.png" w="70px" h="70px" />
            <Image src="https://cdn4.iconfinder.com/data/icons/logos-and-brands-2/468/5_Adidas_logo_logos-64.png" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/circle-icons/64/redmond_pie.png" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Zara-64.png" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Puma-64.png" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/circle-icons/64/redmond_pie.png" w="70px" h="70px" />
          </Flex>

          <Flex gap="120px" mt="50px" pl="100px" >
            <Image src="https://cdn4.iconfinder.com/data/icons/cryptocoins/227/BTA-64.png" w="70px" h="70px" />
            <Image src="https://partners.bigcommerce.com/partner_content/76/125676/clients/10703_185x65.jpg?t=8d492fe8e001898" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/logos-21/40/Gucci-64.png" w="70px" h="70px" />
            <Image src="https://partners.bigcommerce.com/partner_content/76/125676/clients/10702_185x65.png?t=8d492fe282ad23e" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/circle-icons/64/redmond_pie.png" w="70px" h="70px" />
            <Image src="https://cdn0.iconfinder.com/data/icons/circle-icons/64/redmond_pie.png" w="70px" h="70px" />


          </Flex>
        </marquee>





      </Box>

    </Box>
  )
}

export default Footer