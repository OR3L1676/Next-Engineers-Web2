import {
  Box,
  Heading,
  useBreakpointValue,
  VStack,
  Text,
  HStack,
  Image,
} from "@chakra-ui/react";
import image from "../assets/couldbegood/hero4image.webp";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const Hero4 = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        px={isLargeScreen ? "33" : 0}
        py={isLargeScreen ? "100px" : "40px"}
        bg="gray.200"
        backgroundImage={`url(${pattern})`}
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
      >
        <HStack
          maxW="1000px"
          flexDirection={isLargeScreen ? "row" : "column-reverse"}
          borderBottom="#FEDB03 20px double"
          pb="50px"
        >
          <Image src={image} maxW="400px" borderRadius="20px" />
          <VStack
            minW="280px"
            maxW="700px"
            textAlign={isLargeScreen ? "right" : "center"}
            css={{ direction: "rtl" }}
            ml={isLargeScreen ? 10 : 0}
            px={isLargeScreen ? "0" : "30px"}
          >
            <Heading fontSize="xx-large" color="#3AB9FF" mb={5}>
              אנו מאמינים במחקר ניסיוני, מהנה ומאתגר
            </Heading>
            <Text
              fontSize="large"
              color="black"
              mb={isLargeScreen ? 0 : "40px"}
            >
              אנו מאמינים בלמידה ניסיונית, מהסוג שמפתח אצל ילדים תשוקה ללמידה,
              מעשיר את חווית הלמידה ומפתח יכולת יצירתיות, חשיבה ולימוד עצמי.
              ייחודה של התכנית הוא בכך שהיא מסוגלת "לגעת" בכל תלמיד, ולרתום את
              רצונם של התלמידים לשחק, לבנות וליצור ולהשתמש בה ככלי להטמעת תכנים
              חינוכיים ויכולות חשיבה.
            </Text>
          </VStack>
        </HStack>
      </Box>
    </div>
  );
};

export default Hero4;
