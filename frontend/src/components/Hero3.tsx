import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";
import movingGiantCirlce from "../assets/couldbegood/movingModelGianCircle.gif";
import {
  Box,
  Image,
  Heading,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";

const Hero3 = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Box
        display="flex"
        flexDirection={isLargeScreen ? "row" : "column-reverse"}
        justifyContent="space-between"
        alignItems="center"
        bg="gray.200"
        width="100%"
        py={10}
        pr={isLargeScreen ? { lg: "140px", md: "60px", sm: "80px" } : 0}
        backgroundImage={`url(${pattern})`}
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
      >
        <Image
          maxW={isLargeScreen ? "700px" : "100%"}
          minW={isLargeScreen ? "300px" : "100%"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={movingGiantCirlce}
          px={isLargeScreen ? "0" : "50px"}
          pl={isLargeScreen ? "100px" : "50px"}
        />
        <Box
          dir="auto"
          minW="280px"
          maxW="700px"
          textAlign={isLargeScreen ? "right" : "center"}
          flex="1"
          ml={isLargeScreen ? 10 : 0}
          px={isLargeScreen ? "0" : "30px"}
        >
          <Heading
            fontSize={isLargeScreen ? "xxx-large" : "xx-large"}
            color="#3AB9FF"
            mb={5}
          >
            שפרו את הידע ואת כישורי הלמידה של ילדיכם באמצעות תוכניות מהנדסי הדור
            הבא
          </Heading>
          <Text fontSize="large" textAlign="justify" color="black">
            שיטת ההוראה הייחודית שפיתחנו, מאפשרת לילדים ללמוד בכיף ולשפר
            מיומנויות. בתוכניות שלנו הילדים לומדים יסודות בפיזיקה, הנדסה
            ומתמטיקה (STEAM) , ועוד המון תחומים חשובים ומעניינים. אנו מספקים
            לתלמידים שלנו הזדמנות ייחודית ליישם את עקרונות לימודי STEAM בצורה
            מעשית ויצירתית. התלמידים שלנו מתכננים בונים ומתנסים עם מבנים
            ומנגנונים שונים, המאפשרים להם לחקור פתרון בעיות בעולם האמיתי ולפתח
            חשיבה ביקורתית. גישה מעשית זו לא רק משפרת את הידע האקדמי אלא גם
            מטפחת יצירתיות, עבודת צוות ומיומנויות תקשורת. חינוך STEAM מעורר
            השראה בתלמידים להפוך ללומדים נלהבים ובעלי מוטיבציה עצמית, ומכין אותם
            לאתגרים של עולם יותר ויותר מונע טכנולוגיה. אנו פרוסים במאות מרכזי
            לימוד בישראל, כגון מרכזים קהילתיים, בתי ספר וצהרונים. התוכניות שלנו
            מיועדות לתלמידים מגילאי 4 עד 12 שנים.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Hero3;
