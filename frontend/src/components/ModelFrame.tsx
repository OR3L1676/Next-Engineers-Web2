import React from 'react'
import ImageCarousel from './ImageCarousel'
import { Box, useBreakpointValue } from '@chakra-ui/react'

interface Props {
    model: string[]
}

const ModelFrame = ({model}:Props) => {
    const iframeWidth = useBreakpointValue({
        base: '100%', 
        sm: '426px',   
        md: '640px',  
        lg: '800px', 
      });
    
      const iframeHeight = useBreakpointValue({
        base: '280px', 
        sm: '310px',
        md: '460px',
        lg: '580px', 
      });
      
  return (
   <>
    <Box w={iframeWidth} h={iframeHeight} borderRadius={20} overflow="hidden">
        <ImageCarousel isModel={true} images={model} />
    </Box>
   </>
  )
}

export default ModelFrame