import React from 'react'
import {Stack, SimpleGrid,Box,Text,Grid,Flex,HStack,VStack,Center,GridItem,Heading } from '@chakra-ui/react'

const Layout4 = () => {
  return (
    <SimpleGrid columns={2}  spacingX='40px' spacingY='20px'>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
    <Box bg='tomato' height='80px'></Box>
  </SimpleGrid>
  )
}

export default Layout4
