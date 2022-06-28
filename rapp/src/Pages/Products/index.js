import React from 'react'
import Card from '../../components/Card'
import { SimpleGrid } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { fetchProductList } from '../../api';
function  Products() {
    const { isLoading, error, data } = useQuery('products', fetchProductList );
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
 
   
  return (
    <div>
       
       <SimpleGrid columns={2} spacingX='40px' spacingY='20px'>
         {data.map((item, key) => (
         <Card key={key} item={item} />
         ))}
    </SimpleGrid>
    </div>
  )
}

export default Products