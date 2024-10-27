import {
  Box,
  Text,
  Heading,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import image1 from "../assets/about-us-src/03355b_333b5e4c885b4babba52d71e11a0e7fa~mv2.webp";
import ContactUsFooter from "../components/ContactUsFooter";

const AboutUs = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <Box pt={isLargeScreen ? "100px" : "80px"}>
      <HStack
        spacing={0}
        alignItems="stretch"
        flexDirection={isLargeScreen ? "row" : "column"}
      >
        <Box
          css={{ direction: "rtl" }}
          w={{ base: "100%", md: "50%" }}
          bg="#FEDB03"
          px={{ base: 4, md: 8 }}
          py={"100px"}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading pb={10} fontSize="60px">
            אודותינו
          </Heading>
          <Text
            textAlign="justify"
            fontSize="large"
            whiteSpace="pre-line"
            maxW="500px"
          >
            {` רשת המהנדסים נקסט פעילה במאות מרכזי למידה - בחינוך הפורמלי והבלתי פורמלי, כגון בתי ספר, מתנ"סים, פעילויות לאחר בית הספר וצרכים מיוחדים.​

החברה פיתחה ומפעילה חוגים ותכניות העשרה ללמידה חווייתית.
בתוכניות שלנו הילדים בונים מודלים, והם ממחישים את העקרונות החינוכיים הנלמדים בכיתה. הם בונים וממציאים את הדגמים באמצעות לבנים חכמות ואביזרים אחרים. כך הם לומדים על עקרונות הנדסיים ומדעיים, ומפתחים מיומנויות שונות.

התכניות משלבות למידה ופיתוח מיומנויות, בתחומי ההנדסה, המדעים, הפיזיקה, הטכנולוגיה והמתמטיקה, על פי מודל החינוך STEAM, לצד משחקים, כיף ובידור. ‏

במהלך התכניות, הילדים עושים שימוש בערכות למידה ועבודה, המכילות חלקי הרכבה ייעודיים, מנועים חשמליים וכו'.`}
          </Text>
        </Box>
        <Box w={{ base: "100%", md: "50%" }} flexShrink={0}>
          <Image
            src={image1}
            boxSize="100%"
            objectFit="cover"
            alt="Children working on a STEAM project"
          />
        </Box>
      </HStack>
      <ContactUsFooter />
    </Box>
  );
};

export default AboutUs;
