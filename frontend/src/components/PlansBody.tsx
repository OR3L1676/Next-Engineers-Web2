import {
  Text,
  Box,
  Heading,
  useBreakpointValue,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import { px } from "framer-motion";

interface Props {
  programHeader: string;
  progrmHeaderDes1: string;
  progrmHeaderDes2: string;
  programImage: string;
  programLogo: string;
  programDes: string;
  colorPDes: string;
}

const PlansBody = ({
  programHeader,
  progrmHeaderDes1,
  progrmHeaderDes2,
  programImage,
  programLogo,
  programDes,
  colorPDes,
}: Props) => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box
backgroundImage={`url(${programImage})`}
 backgroundSize="cover"
 backgroundPosition="center"
 w="100%"
 minH={{base : "300px" , sm: "400px", md: "90vh"}}
 maxH="1000px"
 display="flex"
 justifyContent="center"
 alignItems="top"
 position="relative"
  overflowX="hidden"

      >
        <Box
        pt="100px"
          px={3}
          w={{ base: "90%", md: "750px" }}
          overflow="hidden"
        >

          {/* white container with program name */}

           <Box      
            bg="rgba(255,255,255,0.8)"
            p="30px 30px 30px 0px"
            borderRadius={20}
            overflow="hidden"
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
          >
            <HStack pr={isLargeScreen ? 5 : 0}>
              <Image
                position="absolute"
                w={isLargeScreen ? "auto" : "auto"}
                h={isLargeScreen ? "250px" : "100px"}
                src={programLogo}
                alt="מהנדסי הדור הבא לוגו"
              />
              <VStack w="100%" alignItems="flex-end">
                <Heading
                  fontSize={isLargeScreen ? "41px" : "x-large"}
                  color="#3AB9FF"
                  textAlign="right"
                  w="75%"
                  css={{ direction: "rtl" }}
                >
                  {programHeader}
                </Heading>
                <Text
                  textAlign="right"
                  w="60%"
                  fontSize={isLargeScreen ? "large" : "smaller"}
                  css={{ direction: "rtl" }}
                >
                  {progrmHeaderDes1}
                  <br />
                  {progrmHeaderDes2}
                </Text>
              </VStack>
            </HStack>
          </Box> 
          {/* white container with program name */}

        </Box>
        
        {/* description box of the program */}
        <Box
          position="absolute"
          bottom="0"
          w="100%"
          textAlign="justify"
          zIndex={1}
        >
          {isLargeScreen ? <Box
            bg={colorPDes}
            p={isLargeScreen ? 5 : 3}
            // w={isLargeScreen ? "70%" : "100vw"}
            w={{sm: "70%", md: "60%"}}
            textAlign="justify"
            m="auto"
            fontSize={"17px"}
            color={colorPDes === "#FEDB03" ? "black" : "white"}
            whiteSpace="pre-line"
            css={{ direction: "rtl" }}
          >
            {programDes}
          </Box> : ""}
        </Box>
        {/* description box of the program */}

      </Box>
        {/* description box of the program */}
       {!isLargeScreen ? <Box
          w="100%"
          textAlign="justify"
        >
          <Box
            bg={colorPDes}
            p={3}
            w="100%"
            textAlign="justify"
            m="auto"
            fontSize={"12px"}
            color={colorPDes === "#FEDB03" ? "black" : "white"}
            whiteSpace="pre-line"
            css={{ direction: "rtl" }}
          >
            {programDes}
          </Box>
        </Box> : ""}
        {/* description box of the program */}
      
    </>
  );
};

export default PlansBody;
