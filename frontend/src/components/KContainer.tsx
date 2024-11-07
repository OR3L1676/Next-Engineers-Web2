import { Box, Button, Collapse, Heading, Text, useBreakpoint, useBreakpointValue } from '@chakra-ui/react'
import React, { useState, createContext } from 'react'
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

interface Props {
    children: React.ReactNode;
    heading?: String;
    backgroundInput: "blue" | "white"
}

const KContainer = ({children, heading, backgroundInput}:Props) => {
  const isLargeScreen = useBreakpointValue({base: false, md: true})
  const [showMore, setShowMore] = useState(false)

  const iframeHeight = useBreakpointValue({
    base: '390px', 
    sm: '380px',
    md: '530px',
    lg: '640px', 
  });

  const backgroundColorBlue = "#3AB9FF";
  
  const backgroundC = backgroundInput === 'blue' ? {
    background: `linear-gradient(${backgroundColorBlue}, ${backgroundColorBlue}), url(${pattern})`,
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "repeat"
    } : {
      bg: "gray.200",
      backgroundImage: `url(${pattern})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "repeat"
    };


  return (
    <>
        <Box border="1px dashed black" p={isLargeScreen ? 5 : 0} sx={backgroundC}>
          <Box>
            <Heading textAlign="center" color={backgroundInput === "blue" ? "white" : "black"}>{heading}</Heading>
          </Box>
          <Collapse startingHeight={iframeHeight} in={showMore}>
            <Box display="flex" justifyContent="center" width="100%" maxW={isLargeScreen ? "1000px" : "100%"} minW="400px" margin="30px auto" px={isLargeScreen ? 10 : 0}>
              <Collapse startingHeight="1000px" in={showMore}>
              {children} 
              </Collapse>
            </Box>
          </Collapse>
          <Box display="flex" justifyContent="center">
            <Button color="white" backgroundColor="#FF5454" _hover={{backgroundColor: "red.300"}} onClick={()=> {
              setShowMore(!showMore)
            }}>{showMore ? "הצג פחות" : "...הצג יותר"}</Button>
          </Box>
        </Box>
    </>
  )
}

export default KContainer