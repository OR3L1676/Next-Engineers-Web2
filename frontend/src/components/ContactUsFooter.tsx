import {
  HStack,
  Box,
  Image,
  Heading,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import ContactUsForm from "./ContactUsForm";
import backgroundImage from "../assets/about-us-src/03355b_ff1bfdca7dd548b788c9c3e216df74c1~mv2.webp";
import image from "../assets/about-us-src/03355b_7289b0002acc41adbe80677461a5f07c~mv2 (1).webp";

const ContactUsFooter = () => {
  const isLargeScreen = useBreakpointValue({ base: false, lg: true });

  return (
    <HStack
      spacing={0}
      width="100%"
      height="1000px"
      display="flex"
      flexDirection={isLargeScreen ? "row" : "column-reverse"}
    >
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage={`url(${backgroundImage})`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        flex="1"
        flexDirection="column"
        minW={isLargeScreen ? "500px" : "100%"}
        height="100%"
      >
        <Box css={{ direction: "rtl" }} pt={isLargeScreen ? "" : "100px"}>
          <Heading color="#3AB9FF">אז למה אתם מחכים?</Heading>
          <Heading color="#3BC402" mb="20px">
            הצטרפו למשפחה שלנו!
          </Heading>
          <Text textAlign="right" color="#3AB9FF">
            יצירת קשר
          </Text>
          <Text
            textAlign="right"
            color="#3AB9FF"
            whiteSpace="pre-line"
          >{`רשת מהנדסי הדור הבא
  מייל: nextengineersglobal@gmail.com`}</Text>
        </Box>
        <ContactUsForm />
      </Box>
      {isLargeScreen && (
        <Image
          src={image}
          alt="מהנדסי הדור הבא ילדים נהנים בחוג"
          flexShrink={1}
          flex="1"
          maxW="50%"
          height="100%"
          objectFit="cover"
        />
      )}
    </HStack>
  );
};

export default ContactUsFooter;
