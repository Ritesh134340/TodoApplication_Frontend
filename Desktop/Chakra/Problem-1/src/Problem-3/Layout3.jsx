import React from 'react'
import {Stack, SimpleGrid,Box,Text,Grid,Flex,HStack,VStack,Center,GridItem,Heading } from '@chakra-ui/react'

const Layout3 = () => {
  return (
    <Grid
    h='400px'
    templateRows='repeat(3, 1fr)'
    templateColumns='repeat(3, 1fr)'
    gap={4}
    margin="94px"
    border="1px solid red"
  
  >
    <GridItem  bg='yellow' />
    <GridItem  bg='yellow' />
    <GridItem colSpan={3} bg='red' />
    <GridItem  bg='lightblue' />
    <GridItem  bg='lightblue' />
    <GridItem  bg='lightblue' />
   
  </Grid>
  )
}

export default Layout3
