import React from 'react'
import {Stack, SimpleGrid,Box,Text,Grid,Flex,HStack,VStack,Center,GridItem,Heading } from '@chakra-ui/react'

const Layout1 = () => {
  return (
    <div>


        
      <Grid templateColumns="repeat(350,550px,350px)">
        <Stack direction={["column","row"]} >
        <GridItem  color="white" bg="blue" w="100%" height="500px" ><Heading>Nav</Heading></GridItem>
        <GridItem  bg="orange" w="100%" height="500px" >CONTENT</GridItem>
        <GridItem  bg="red" w="100%" height="500px" >WEIDGET</GridItem>
        </Stack>
      </Grid>

   

     
    </div>
  )
}

export default Layout1
