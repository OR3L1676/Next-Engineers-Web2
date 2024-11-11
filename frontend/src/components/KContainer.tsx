import { Box, Button, Collapse, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useBreakpoint, useBreakpointValue, useDisclosure } from '@chakra-ui/react'
import React, { useState, createContext } from 'react'
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";
interface Props {
    children: React.ReactNode;
    heading?: String;
    backgroundInput: "blue" | "white" | "red" | "green"
}

const KContainer = ({children, heading, backgroundInput}:Props) => {
  const isLargeScreen = useBreakpointValue({base: false, md: true})
  const { isOpen, onOpen, onClose } = useDisclosure()

  const backgroundColorBlue = "#3AB9FF";
  const backgroundColorRed = "#FF5454";
  const backgroundColorGreen = "#45D82F";
  
  const backgroundC = backgroundInput === 'blue' ? {
    background: `linear-gradient(${backgroundColorBlue}, ${backgroundColorBlue}), url(${pattern})`,
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "repeat"
    } : backgroundInput === "green" ? {
      background: `linear-gradient(${backgroundColorRed}, ${backgroundColorRed}), url(${pattern})`,
      backgroundBlendMode: "overlay",
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "repeat"
    } : backgroundInput === "red" ? {
      background: `linear-gradient(${backgroundColorGreen}, ${backgroundColorGreen}), url(${pattern})`,
    backgroundBlendMode: "overlay",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundRepeat: "repeat"
    } : backgroundInput === "white" ? {
      bg: "gray.200",
      backgroundImage: `url(${pattern})`,
      backgroundPosition: "center",
      backgroundSize: "contain",
      backgroundRepeat: "repeat"
    } : ""


  return (
    <>
        <Box py={5} sx={backgroundC} h="100%" display="flex" flexDir="column" justifyContent="space-around">
          <Box>
            <Heading textAlign="center" color={backgroundInput === "white" ? "black" : "white"} >{heading}</Heading>
          </Box>
            <Box display="flex" justifyContent="center" width="100%" maxW={isLargeScreen ? "1000px" : "100%"} minW="300px" margin="30px auto" px={isLargeScreen ? 10 : 0} >
              <Button color="blackAlpha.800" onClick={onOpen}>...להצגת התכנים</Button>
              <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent w="80vw" maxW="80vw" h="auto" maxH="auto" sx={backgroundC}>
                  <ModalHeader fontSize={isLargeScreen ? "50px" : "32px"} fontWeight="bold" textAlign="center" color={backgroundInput === "white" ? "black" : "white"} >{heading}</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                  <Box display="flex" justifyContent="center">
                  {children} 
                  </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose}>סגירה</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
        </Box>
    </>
  )
}

export default KContainer