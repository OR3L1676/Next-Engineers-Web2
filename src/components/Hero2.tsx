import {
  Box,
  AspectRatio,
  useBreakpointValue,
  Text,
  Heading,
} from "@chakra-ui/react";
import video from "../assets/couldbegood/HEB_short_final_1_LOEREZ.mp4";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const Hero2 = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const backgroundColor = "#3AB9FF";

  return (
    <Box
      display="flex"
      flexDirection={isLargeScreen ? "row" : "column"}
      alignItems="center"
      justifyContent="space-evenly"
      px={isLargeScreen ? "33" : 0}
      py={isLargeScreen ? 10 : 0}
      pb={isLargeScreen ? 10 : 5}
      pt={isLargeScreen ? "140px" : "80px"}
      background={`linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`}
      backgroundBlendMode="overlay"
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
    >
      <Box
        maxW={isLargeScreen ? "1000px" : "100%"}
        minW={isLargeScreen ? "400px" : "100%"}
        mb={isLargeScreen ? 0 : 4}
        mr={isLargeScreen ? 10 : 0}
        borderRadius={isLargeScreen ? 20 : 0}
        overflow="hidden"
      >
        <video
          src={video}
          title="intro"
          loop
          autoPlay
          muted
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
      <Box
        textAlign="center"
        dir="auto"
        color="white"
        px={isLargeScreen ? "0" : "30px"}
      >
        <Heading fontSize="xxx-large" mb={4}>
          לימודי{" "}
          <Box as="span" color="#FF5454">
            S
          </Box>
          <Box as="span" color="orange">
            T
          </Box>
          <Box as="span" color="#FEDB03">
            E
          </Box>
          <Box as="span" color="#45D82F">
            A
          </Box>
          <Box as="span" color="royalblue">
            M
          </Box>{" "}
          לילדים
        </Heading>
        <Text fontSize="large" textAlign="justify" minW="300px" maxW="500px">
          תחומי המדע זוכים בשנים האחרונות לדגש הולך וגובר בתעשיית החינוך, וגישת
          STEAM, המשלבת לימוד רב-תחומי במקצועות המדע, היא מהמובילות בתחום.
          תוכניות לימוד המבוססות על גישת STEAM מאפשרות לתלמידים לפתח את הכישורים
          הנדרשים להצלחה בעולם הטכנולוגי המתפתח. הורים רבים מעוניינים בתוכניות
          לימוד אלו עבור ילדיהם, מתוך הבנת חשיבות תחומי ההנדסה, הטכנולוגיה
          והמדעים.
          <br />
          <br />
          אנו ב-Next Engineers Ltd מאמינים שתוכניות אלו מעודדות גישה חיובית
          ללמידה באמצעות משחק והנאה, ובכך תורמות להצלחת הילדים גם בעתיד.
        </Text>
      </Box>
    </Box>
  );
};

export default Hero2;
