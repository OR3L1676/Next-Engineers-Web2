import {
  Box,
  Heading,
  Image,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import pattern from "../../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";
import image1 from "../../assets/franchisees-src/03355b_09b5ec89c2644039a617cb8c5acbbc0c~mv2.webp";
const FranchiseeInventation = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const backgroundColor = "#3DC404";
  return (
    <>
      {/*image*/}
      <Box flexShrink="2">
        <Image
          src={image1}
          alt="מהנדסי הדור הבא לקוחות מרוצים"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      {/*text*/}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexGrow={"1"}
        background={`linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`}
        backgroundBlendMode="overlay"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
        color="white"
        css={{ direction: "rtl" }}
        p={{ lg: "100px", md: "50px", base: "20px" }}
      >
        <Box>
          <Heading
            fontSize={{ lg: "70px", md: "50px", base: "50px" }}
            pb="20px"
            textAlign={isLargeScreen ? "right" : "center"}
          >
            הפוך לזכיין!
          </Heading>
          <Text
            fontSize={{ lg: "xxx-large", md: "xx-large", base: "xx-large" }}
            pb="20px"
            textAlign={isLargeScreen ? "right" : "center"}
          >
            אנו מזמינים אותך לקחת חלק
          </Text>
          <Text
            maxW={isLargeScreen ? "40vw" : "100%"}
            fontSize={{ lg: "x-large", md: "x-large", base: "large" }}
            textAlign={isLargeScreen ? "justify" : "center"}
            px={isLargeScreen ? "inherit" : "50px"}
          >
            Next Engineers Ltd פיתחה מודל עסקי, באמצעותו תוכלו לפתוח עסק חינוכי
            משלכם, קל ללמידה, הפעלה והקמה. כזכיין שלנו, תוכל להשתלב בתעשיית
            החינוך של העתיד וליהנות מכל ההטבות הנלוות. השותפים שלנו מקבלים את
            ההכשרה, הכלים והתמיכה, על מנת לפתח עסק משגשג.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default FranchiseeInventation;
