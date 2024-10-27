import {
  Text,
  Box,
  Heading,
  useBreakpointValue,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";

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
        w="100%"
        h="100vh"
        backgroundImage={programImage}
        backgroundSize="cover"
        backgroundPosition="center"
        position="relative"
        display="flex"
        justifyContent="center"
        overflowX="hidden"
      >
        <Box
          pt="150px"
          px={3}
          w={{ base: "90%", md: "750px" }}
          overflow="hidden"
        >
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
        </Box>
        <Box
          position="absolute"
          bottom="0"
          w="100%"
          textAlign="justify"
          zIndex={1}
        >
          <Box
            bg={colorPDes}
            p={isLargeScreen ? 5 : 3}
            w={isLargeScreen ? "50vw" : "100vw"}
            textAlign="justify"
            m="auto"
            fontSize={isLargeScreen ? "large" : "smaller"}
            whiteSpace="pre-line"
            css={{ direction: "rtl" }}
          >
            {programDes}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PlansBody;
