import { Box, SimpleGrid, GridItem, useBreakpointValue } from "@chakra-ui/react";
import React from "react";
import KContainer from "../components/KContainer";
import KContent from "../components/KContent";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const KidsClub = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (

    <Box  h="100vh" display="flex" alignItems="center" pt={isLargeScreen ? "100px" : "80px"} px={4} bg="gray.200"
    backgroundImage={`url(${pattern})`}
    backgroundPosition="center"
    backgroundSize="contain"
    backgroundRepeat="repeat">
      
      <SimpleGrid 
        columns={{ base: 1, sm: 2 }} 
        spacing={6}
        maxW="1200px"
        w="100%"
        maxH="600px"
        h="100%"
        mx="auto"
        py={10}
      >
        <GridItem 
          borderRadius="xl" 
          overflow="hidden"
          w="100%"
          h="100%"
        >
          <KContainer backgroundInput="blue" heading="ממציאים בריבוע">
            <KContent backgroundInput="blue" isVideo={true}/>
          </KContainer>
        </GridItem>

        <GridItem 
          borderRadius="xl" 
          overflow="hidden"
          w="100%"
          h="100%"
        >
          <KContainer backgroundInput="red" heading="Super Steam - קומיקס">
            <KContent backgroundInput="red" isComics={true}/>
          </KContainer>
        </GridItem>

        <GridItem 
          colSpan={{ base: 1, sm: 3 }} 
          mx="auto" 
          borderRadius="xl" 
          overflow="hidden"
          w={{ base: "100%", sm: "48%" }}
          h="100%"
        >
          <KContainer backgroundInput="green" heading="הוראות הרכבה לדגמים">
            <KContent backgroundInput="green" isModel={true}/>
          </KContainer>
        </GridItem>
      </SimpleGrid>
    </Box>

  );
};

export default KidsClub;