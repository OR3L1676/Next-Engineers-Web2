import {
  Box,
  Heading,
  useBreakpointValue,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";

interface Props {
  image: string;
  heading: string;
  body: string;
  side: "right" | "left";
  bottomImage?: string;
}

const Vcard = ({ image, heading, body, side, bottomImage }: Props) => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        px={isLargeScreen ? "20px" : 0}
        overflowX="hidden"
        w="100%"
      >
        <Box
          borderBottom="#FEDB03 20px double"
          maxW="1000px"
          display="flex"
          alignItems="center"
          flexDirection="column"
          justifyContent="center"
          py={isLargeScreen ? "25px" : "40px"}
          w="100%"
        >
          <HStack
            flexDirection={
              isLargeScreen && side === "right"
                ? "row"
                : isLargeScreen && side === "left"
                ? "row-reverse"
                : "column-reverse"
            }
            mb={bottomImage ? "20px" : 0}
            w="100%"
            overflow="hidden"
          >
            <Image
              src={image}
              objectFit="cover"
              w={isLargeScreen ? "100%" : "70%"}
              h={isLargeScreen ? "300px" : "auto"}
              borderRadius="20px"
              maxW="700px"
            />
            <VStack
              minW="280px"
              maxW="700px"
              w="100%"
              textAlign={isLargeScreen ? "justify" : "center"}
              css={{ direction: "rtl" }}
              ml={
                isLargeScreen && side === "right"
                  ? 10
                  : isLargeScreen && side === "left"
                  ? 0
                  : 0
              }
              mr={
                isLargeScreen && side === "left"
                  ? 10
                  : isLargeScreen && side === "right"
                  ? 0
                  : 0
              }
              px={isLargeScreen ? "0" : "30px"}
            >
              <Heading fontSize="xx-large" color="#3AB9FF" mb={5}>
                {heading}
              </Heading>
              <Text
                fontSize="large"
                color="black"
                mb={isLargeScreen ? 0 : "40px"}
              >
                {body}
              </Text>
            </VStack>
          </HStack>
          {bottomImage && (
            <Image
              src={bottomImage}
              maxW="700px"
              w="100%"
              borderRadius="20px"
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default Vcard;
