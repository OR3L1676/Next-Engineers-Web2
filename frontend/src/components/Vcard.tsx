import {
  Box,
  Heading,
  useBreakpointValue,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import ImageCarousel from "./ImageCarousel"; // Make sure to import your ImageCarousel component

interface Props {
  image: string | string[];
  heading: string;
  body: string;
  side: "right" | "left";
  bottomImage?: string;
  v2?: boolean;
}

const Vcard = ({
  image,
  heading,
  body,
  side,
  bottomImage,
  v2 = false,
}: Props) => {
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
          borderBottom={v2 ? "" : "#FEDB03 20px double"}
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
            {Array.isArray(image) ? (
              <ImageCarousel images={image} />
            ) : (
              <Image
                src={image}
                objectFit="cover"
                w={isLargeScreen ? "100%" : "100%"}
                h={isLargeScreen ? "300px" : "auto"}
                borderRadius={isLargeScreen ? "20px" : 0}
                maxW="700px"
              />
            )}
            <VStack
              minW="280px"
              maxW="700px"
              w="100%"
              textAlign="justify"
              display="-moz-initial"
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
              {v2 ? (
                ""
              ) : (
                <Heading
                  textAlign="right"
                  fontSize="xx-large"
                  color="#3AB9FF"
                  mb={5}
                >
                  {heading}
                </Heading>
              )}
              <Text
                fontSize="large"
                color="black"
                mb={isLargeScreen ? 0 : "40px"}
                whiteSpace="pre-line"
              >
                {v2 ? (
                  <Heading display="inline" fontSize="20px">
                    {heading} -{" "}
                  </Heading>
                ) : (
                  ""
                )}
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
