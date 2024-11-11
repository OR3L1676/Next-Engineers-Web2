import ImageCarousel from './ImageCarousel'
import { Box, useBreakpointValue } from '@chakra-ui/react'

interface Props {
    comics: string[]
}

const ComicsFrame = ({comics}:Props) => {
    const iframeWidth = useBreakpointValue({
      base: '100%px', 
      sm: '310px',
      md: '460px',
      lg: '580px', 
    });


    const iframeHeight = useBreakpointValue({
        base: '100%', 
        sm: '100%',   
        md: '100%',  
        lg: '100%', 
      });
      
  return (
   <>
    <Box w={iframeWidth} h={iframeHeight} borderRadius={20} overflow="hidden">
        <ImageCarousel isModel={true} images={comics} />
    </Box>
   </>
  )
}

export default ComicsFrame