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
          px={isLargeScreen ? "0" : "75px"}
        >
          <Heading fontSize="xxx-large" color="#3AB9FF" mb={5}>
            מהו חינוך STEAM?
          </Heading>
          <Text fontSize="large" textAlign="justify" color="black">
            חינוך ללמידה STEAM מדעים, טכנולוגיה, הנדסה, אומנויות ומתמטיקה,
            בשילוב עם כלי בנייה מעשיים כמו K'NEX, מציע גישה חדשנית ומרתקת
            ללמידה. אנו מספקים לסטודנטים הזדמנות ייחודית ליישם את העקרונות של
            STEAM בצורה מעשית ויצירתית. התלמידים יכולים לתכנן, לבנות ולהתנסות עם
            מבנים ומנגנונים שונים, המאפשרים להם לחקור פתרון בעיות בעולם האמיתי
            וחשיבה ביקורתית. הוא מטפח הבנה עמוקה של מושגים במדע, הנדסה ומתמטיקה
            תוך עידוד ביטוי אמנותי. גישה מעשית זו לא רק משפרת את הידע האקדמי אלא
            גם מטפחת יצירתיות, עבודת צוות ומיומנויות תקשורת. חינוך STEAM מעורר
            השראה בתלמידים להפוך ללומדים נלהבים ובעלי מוטיבציה עצמית, ומכין אותם
            לאתגרים של עולם יותר ויותר מונע טכנולוגיה.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Hero3;
