import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";

import {
  FaArrowLeft,
  FaBookOpen,
  FaCheck,
  FaChild,
  FaClock,
  FaEnvelope,
  FaGraduationCap,
  FaHeart,
  FaLightbulb,
  FaMapMarkerAlt,
  FaPhone,
  FaUsers,
} from "react-icons/fa";

import hero from "../../assets/required/DSC02879.jpg";
import intro from "../../assets/required/PXL_20230711_134856260.MP.jpg";
import activity from "../../assets/required/file_0000000084e0820a880f593158c94b0d.png";
import gallery1 from "../../assets/required/next center Gemini_02_high rez.png";
import gallery2 from "../../assets/required/R3EH3217.jpg";
import gallery3 from "../../assets/required/PXL_20230711_134856260.MP.jpg";
import pattern from "../../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

// ============================================================
// BRAND COLORS
// ============================================================

const colorBlue = "#3AB9FF";
const colorRed = "#FF5454";
const colorGreen = "#45D82F";
const colorYellow = "#FEDB03";

const darkNavy = "#102A43";

// ============================================================
// SOFT COLORS
// ============================================================

const blueSoft = "rgba(58, 185, 255, 0.10)";
const graySoft = "rgba(203, 203, 203, 0.59)";

const greenSoft = "rgba(69, 216, 47, 0.11)";
const greenVerySoft = "rgba(69, 216, 47, 0.05)";

const redSoft = "rgba(255, 84, 84, 0.10)";

const yellowSoft = "rgba(254, 219, 3, 0.14)";

// ============================================================
// PATTERN BACKGROUNDS
// ============================================================

const whitePatternBackground = {
  background: `linear-gradient(${graySoft}, ${graySoft}), url(${pattern})`,
  backgroundBlendMode: "overlay",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "repeat",
};

const darkNavyPatternBackground = {
  background: `linear-gradient(${darkNavy}, ${darkNavy}), url(${pattern})`,
  backgroundBlendMode: "overlay",
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "repeat",
};

// ============================================================
// IMAGES
// ============================================================

const images = {
  hero,
  intro,
  activity,
  gallery1,
  gallery2,
  gallery3,
};

// ============================================================
// DATA
// ============================================================

const activities = [
  {
    icon: FaChild,
    title: "העברת חוגים לילדים",
    description:
      "העברת שיעורי רובוטיקה, הנדסה, טכנולוגיה ויצירה לילדים בגילאי יסודי.",
    color: colorBlue,
    background: blueSoft,
  },
  {
    icon: FaLightbulb,
    title: "הפיכת רעיונות למציאות",
    description:
      "הובלת הילדים בתהליך יצירתי שבו הם מתכננים, בונים ומפתחים פתרונות משלהם.",
    color: colorYellow,
    background: yellowSoft,
  },
  {
    icon: FaUsers,
    title: "עבודה עם ילדים",
    description:
      "יצירת קשר אישי עם הילדים, עידוד סקרנות ובניית סביבת למידה חיובית.",
    color: colorGreen,
    background: greenSoft,
  },
  {
    icon: FaBookOpen,
    title: "עבודה לפי מערכי שיעור",
    description:
      "קבלת מערכי שיעור מוכנים והעברת הפעילות בהתאם לתוכנית של מהנדסי הדור הבא.",
    color: colorRed,
    background: redSoft,
  },
  {
    icon: FaHeart,
    title: "יצירת חוויה",
    description:
      "המטרה היא לא רק ללמד אלא לגרום לילדים להתלהב, לחקור ולהאמין שהם יכולים ליצור בעצמם.",
    color: colorBlue,
    background: blueSoft,
  },
  {
    icon: FaGraduationCap,
    title: "למידה והתפתחות",
    description: "הזדמנות להתפתח בתחום ההדרכה, הטכנולוגיה והעבודה עם ילדים.",
    color: colorGreen,
    background: greenSoft,
  },
];

const requirements = [
  "אהבה לילדים ורצון לעבוד איתם",
  "יכולת עמידה מול קבוצה",
  "אחריות ומחויבות",
  "גישה יצירתית ויכולת לפתור בעיות",
  "יכולת למידה ועבודה לפי מערכי שיעור",
  "יחסי אנוש טובים",
  "ניידות בין מרכזים / מוסדות בהתאם לצורך",
];

const suitableFor = [
  {
    icon: FaGraduationCap,
    text: "סטודנטים להנדסה",
  },
  {
    icon: FaGraduationCap,
    text: "סטודנטים למדעי המחשב",
  },
  {
    icon: FaBookOpen,
    text: "סטודנטים לחינוך",
  },
  {
    icon: FaLightbulb,
    text: "אנשים יצירתיים",
  },
  {
    icon: FaChild,
    text: "מדריכים ומדריכות",
  },
  {
    icon: FaUsers,
    text: "בוגרי תנועות נוער",
  },
  {
    icon: FaHeart,
    text: "אנשים שאוהבים ילדים",
  },
  {
    icon: FaGraduationCap,
    text: "בוגרי תארים",
  },
  {
    icon: FaLightbulb,
    text: "אנשים שאוהבים טכנולוגיה",
  },
  {
    icon: FaUsers,
    text: "כל מי שרוצה להשפיע",
  },
];

const benefits = [
  {
    icon: FaClock,
    title: "גמישות",
    description:
      "עבודה שמתאימה לסטודנטים ולאנשים שמחפשים עבודה גמישה לצד עיסוקים נוספים.",
    color: colorBlue,
    background: blueSoft,
  },
  {
    icon: FaChild,
    title: "עבודה עם ילדים",
    description:
      "עבודה משמעותית שבה אפשר להשפיע על ילדים ולפתח אצלם סקרנות וביטחון.",
    color: colorGreen,
    background: greenSoft,
  },
  {
    icon: FaLightbulb,
    title: "תוכן מעניין",
    description: "העברת פעילויות בתחומי הרובוטיקה, ההנדסה, הטכנולוגיה והיצירה.",
    color: colorYellow,
    background: yellowSoft,
  },
  {
    icon: FaGraduationCap,
    title: "הכשרה",
    description: "קבלת הכשרה וכלים מקצועיים לפני תחילת העבודה.",
    color: colorRed,
    background: redSoft,
  },
  {
    icon: FaUsers,
    title: "קהילה",
    description: "הצטרפות לצוות מדריכים ואנשי חינוך שעובדים יחד.",
    color: colorBlue,
    background: blueSoft,
  },
  {
    icon: FaHeart,
    title: "השפעה",
    description:
      "הזדמנות להיות חלק מחוויה שיכולה להשפיע על הדרך שבה ילדים רואים טכנולוגיה ויצירה.",
    color: colorGreen,
    background: greenSoft,
  },
];

const areas = [
  "צפון",
  "חיפה והקריות",
  "שרון",
  "מרכז",
  "ירושלים",
  "שפלה",
  "דרום",
];

// ============================================================
// PAGE
// ============================================================

const Required = () => {
  const scrollToApplication = () => {
    document.getElementById("application")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <Box dir="rtl" bg="white" overflow="hidden">
      {/* ======================================================
          HERO
      ====================================================== */}

      <Box
        position="relative"
        minH={{ base: "650px", md: "760px" }}
        display="flex"
        alignItems="center"
        overflow="hidden"
        sx={darkNavyPatternBackground}
      >
        <Image
          src={images.hero}
          alt="מדריכים של מהנדסי הדור הבא"
          position="absolute"
          inset={0}
          w="100%"
          h="100%"
          objectFit="cover"
        />

        <Box position="absolute" inset={0} bg="rgba(16, 42, 67, 0.80)" />

        {/* Blue glow */}

        <Box
          position="absolute"
          w={{ base: "350px", md: "650px" }}
          h={{ base: "350px", md: "650px" }}
          borderRadius="full"
          bg="rgba(58, 185, 255, 0.10)"
          filter="blur(20px)"
          top="-250px"
          left="-180px"
        />

        {/* Green glow */}

        <Box
          position="absolute"
          w={{ base: "250px", md: "450px" }}
          h={{ base: "250px", md: "450px" }}
          borderRadius="full"
          bg="rgba(69, 216, 47, 0.08)"
          filter="blur(30px)"
          bottom="-220px"
          right="-150px"
        />

        {/* Yellow decorative line */}

        <Box
          position="absolute"
          top="0"
          right="12%"
          w="5px"
          h={{ base: "150px", md: "240px" }}
          bg={colorYellow}
          opacity={0.9}
        />

        {/* Red decorative circle */}

        <Box
          position="absolute"
          bottom="15%"
          left="7%"
          w="70px"
          h="70px"
          borderRadius="full"
          border="8px solid"
          borderColor={colorRed}
          opacity={0.8}
        />

        <Container
          maxW="1200px"
          position="relative"
          zIndex={1}
          py={{ base: 20, md: 28 }}
        >
          <Box maxW="820px">
            <HStack spacing={3} mb={7} justify="flex-start">
              <Box
                w="10px"
                h="10px"
                borderRadius="full"
                bg={colorGreen}
                boxShadow={`0 0 0 6px ${greenSoft}`}
              />

              <Text
                color={colorGreen}
                fontWeight="800"
                fontSize={{ base: "sm", md: "md" }}
              >
                אנחנו מגייסים מדריכים ומדריכות
              </Text>
            </HStack>

            <Heading
              color="white"
              fontSize={{
                base: "4xl",
                sm: "5xl",
                md: "7xl",
              }}
              lineHeight="1.05"
              fontWeight="900"
              mb={7}
            >
              בואו להיות חלק
              <Box as="span" color={colorBlue}>
                {" "}
                מהדור הבא
              </Box>
            </Heading>

            <Box w="90px" h="6px" bg={colorYellow} borderRadius="full" mb={7} />

            <Text
              color="whiteAlpha.900"
              fontSize={{ base: "lg", md: "2xl" }}
              lineHeight="1.8"
              maxW="750px"
              mb={9}
            >
              אנחנו מחפשים אנשים שאוהבים ילדים, טכנולוגיה, יצירה ואתגרים —
              ורוצים להפוך כל שיעור לחוויה שהילדים לא ישכחו.
            </Text>

            <HStack spacing={4} flexWrap="wrap" mb={10}>
              <HStack
                bg="rgba(69, 216, 47, 0.12)"
                border="1px solid"
                borderColor="rgba(69, 216, 47, 0.35)"
                borderRadius="full"
                px={4}
                py={2}
              >
                <Icon as={FaCheck} color={colorGreen} />

                <Text color="white" fontWeight="600" fontSize="sm">
                  הכשרה מקצועית
                </Text>
              </HStack>

              <HStack
                bg="rgba(254, 219, 3, 0.12)"
                border="1px solid"
                borderColor="rgba(254, 219, 3, 0.35)"
                borderRadius="full"
                px={4}
                py={2}
              >
                <Icon as={FaClock} color={colorYellow} />

                <Text color="white" fontWeight="600" fontSize="sm">
                  עבודה גמישה
                </Text>
              </HStack>

              <HStack
                bg="rgba(255, 84, 84, 0.12)"
                border="1px solid"
                borderColor="rgba(255, 84, 84, 0.35)"
                borderRadius="full"
                px={4}
                py={2}
              >
                <Icon as={FaHeart} color={colorRed} />

                <Text color="white" fontWeight="600" fontSize="sm">
                  עבודה עם משמעות
                </Text>
              </HStack>
            </HStack>

            <Button
              onClick={scrollToApplication}
              bg={colorYellow}
              color={darkNavy}
              size="lg"
              px={9}
              py={7}
              fontSize="lg"
              fontWeight="900"
              borderRadius="xl"
              rightIcon={<FaArrowLeft />}
              boxShadow="0 12px 30px rgba(254, 219, 3, 0.18)"
              _hover={{
                bg: colorYellow,
                transform: "translateY(-4px)",
                boxShadow: "0 18px 40px rgba(254, 219, 3, 0.28)",
              }}
              transition="all 0.25s"
            >
              רוצים להצטרף? השאירו פרטים
            </Button>
          </Box>
        </Container>
      </Box>

      {/* ======================================================
          INTRO
      ====================================================== */}

      <Box sx={whitePatternBackground}>
        <Container maxW="1200px" py={{ base: 18, md: 28 }}>
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
            }}
            gap={{ base: 12, md: 18 }}
            alignItems="center"
          >
            <Box position="relative">
              <Box
                position="absolute"
                w="100px"
                h="100px"
                bg={colorYellow}
                borderRadius="2xl"
                top="-20px"
                right="-20px"
                zIndex={0}
                opacity={0.9}
              />

              <Box
                position="relative"
                zIndex={1}
                borderRadius="3xl"
                overflow="hidden"
                boxShadow="0 25px 60px rgba(16, 42, 67, 0.16)"
              >
                <Image
                  src={images.intro}
                  alt="פעילות של מהנדסי הדור הבא"
                  w="100%"
                  h={{ base: "350px", md: "520px" }}
                  objectFit="cover"
                />

                <Box
                  position="absolute"
                  bottom={5}
                  right={5}
                  bg={colorGreen}
                  color="white"
                  borderRadius="2xl"
                  px={6}
                  py={4}
                  boxShadow="0 12px 30px rgba(69, 216, 47, 0.25)"
                >
                  <Text fontSize="3xl" fontWeight="900">
                    100%
                  </Text>

                  <Text fontWeight="700">יצירתיות וסקרנות</Text>
                </Box>
              </Box>
            </Box>

            <Stack spacing={6}>
              <HStack spacing={3}>
                <Box w="35px" h="5px" bg={colorRed} borderRadius="full" />

                <Text color={colorRed} fontWeight="900" fontSize="lg">
                  עבודה עם משמעות
                </Text>
              </HStack>

              <Heading
                color={darkNavy}
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.15"
                fontWeight="900"
              >
                עבודה שהיא הרבה
                <Box as="span" color={colorBlue}>
                  {" "}
                  מעבר לעבודה
                </Box>
              </Heading>

              <Text
                color="gray.600"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="2"
              >
                אנחנו מחפשים אנשים שאוהבים ילדים, טכנולוגיה, יצירה ואתגרים.
                אנשים שרוצים להגיע בכל יום ולראות ילדים מתלהבים מהרעיון שהם
                בעצמם יכולים לבנות, להמציא וליצור.
              </Text>

              <Text
                color="gray.600"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="2"
              >
                לא צריך להיות מהנדס ולא צריך להגיע עם ניסיון קודם בהדרכה. אנחנו
                מספקים את התוכן, ההכשרה והכלים — ואתם מביאים את האנרגיה,
                היצירתיות והרצון להשפיע.
              </Text>

              <SimpleGrid columns={2} spacing={5} pt={3}>
                <Box
                  bg={blueSoft}
                  borderRadius="2xl"
                  p={6}
                  borderBottom="5px solid"
                  borderColor={colorBlue}
                >
                  <Text color={colorBlue} fontSize="3xl" fontWeight="900">
                    10+
                  </Text>

                  <Text color={darkNavy} fontWeight="800">
                    שנות פעילות
                  </Text>
                </Box>

                <Box
                  bg={greenSoft}
                  borderRadius="2xl"
                  p={6}
                  borderBottom="5px solid"
                  borderColor={colorGreen}
                >
                  <Text color={colorGreen} fontSize="3xl" fontWeight="900">
                    1000+
                  </Text>

                  <Text color={darkNavy} fontWeight="800">
                    ילדים בכל שנה
                  </Text>
                </Box>
              </SimpleGrid>
            </Stack>
          </Grid>
        </Container>
      </Box>

      {/* ======================================================
          ROLE
      ====================================================== */}

      <Box
        sx={whitePatternBackground}
        py={{ base: 18, md: 28 }}
        position="relative"
      >
        <Box
          position="absolute"
          top={0}
          right={0}
          w="8px"
          h="180px"
          bg={colorBlue}
        />

        <Container maxW="1200px">
          <VStack spacing={5} textAlign="center" mb={14}>
            <HStack spacing={3}>
              <Box w="10px" h="10px" bg={colorRed} borderRadius="full" />

              <Text color={colorBlue} fontWeight="900">
                התפקיד שלכם
              </Text>

              <Box w="10px" h="10px" bg={colorGreen} borderRadius="full" />
            </HStack>

            <Heading
              color={darkNavy}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
            >
              אז מה עושים?
            </Heading>

            <Text
              color="gray.600"
              fontSize={{ base: "md", md: "lg" }}
              maxW="720px"
              lineHeight="1.9"
            >
              התפקיד משלב הדרכה, יצירה, טכנולוגיה והרבה עבודה עם ילדים.
            </Text>
          </VStack>

          <SimpleGrid
            columns={{
              base: 1,
              sm: 2,
              lg: 3,
            }}
            spacing={6}
          >
            {activities.map((item, index) => (
              <Box
                key={item.title}
                bg="white"
                borderRadius="2xl"
                p={7}
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="gray.100"
                boxShadow="0 8px 30px rgba(16, 42, 67, 0.06)"
                transition="all 0.25s"
                _hover={{
                  transform: "translateY(-8px)",
                  boxShadow: "0 20px 45px rgba(16, 42, 67, 0.12)",
                  borderColor: item.color,
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="100%"
                  h="5px"
                  bg={item.color}
                />

                <Text
                  position="absolute"
                  top={4}
                  left={5}
                  fontSize="5xl"
                  fontWeight="900"
                  color={item.background}
                >
                  {String(index + 1).padStart(2, "0")}
                </Text>

                <Box
                  w="62px"
                  h="62px"
                  borderRadius="2xl"
                  bg={item.background}
                  color={item.color}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                >
                  <Icon as={item.icon} boxSize={7} />
                </Box>

                <Heading size="md" color={darkNavy} mb={3} fontWeight="900">
                  {item.title}
                </Heading>

                <Text color="gray.600" lineHeight="1.85">
                  {item.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ======================================================
          NOT ENGINEERS
      ====================================================== */}

      <Box
        sx={darkNavyPatternBackground}
        py={{ base: 18, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          w="180px"
          h="180px"
          borderRadius="full"
          border="25px solid"
          borderColor="rgba(255, 84, 84, 0.12)"
          transform="translate(-50%, -50%)"
        />

        <Container maxW="1200px">
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
            }}
            gap={{ base: 12, md: 18 }}
            alignItems="center"
          >
            <Box
              borderRadius="3xl"
              overflow="hidden"
              position="relative"
              border="5px solid"
              borderColor="rgba(58, 185, 255, 0.25)"
            >
              <Image
                src={images.activity}
                alt="פעילות לילדים"
                w="100%"
                h={{ base: "350px", md: "520px" }}
                objectFit="cover"
              />

              <Box
                position="absolute"
                top={5}
                right={5}
                bg={colorRed}
                color="white"
                borderRadius="full"
                px={5}
                py={2}
                fontWeight="900"
                boxShadow="0 10px 25px rgba(255, 84, 84, 0.30)"
              >
                לא צריך ניסיון קודם
              </Box>
            </Box>

            <Stack spacing={7}>
              <HStack spacing={3}>
                <Box w="35px" h="5px" bg={colorYellow} borderRadius="full" />

                <Text color={colorYellow} fontWeight="900">
                  חשוב לדעת
                </Text>
              </HStack>

              <Heading
                color="white"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.15"
                fontWeight="900"
              >
                לא חייבים להיות
                <Box as="span" color={colorGreen}>
                  {" "}
                  מהנדסים
                </Box>
              </Heading>

              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="2"
              >
                אם אתם אוהבים ילדים, אוהבים ליצור ויש לכם גישה חיובית וסקרנית —
                יכול להיות שאתם בדיוק מה שאנחנו מחפשים.
              </Text>

              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="2"
              >
                מערכי הפעילות שלנו בנויים בצורה ברורה ומאפשרים למדריכים ללמוד
                ולהעביר את הפעילויות גם ללא רקע מקצועי בתחום ההנדסה.
              </Text>

              <Box
                bg="rgba(69, 216, 47, 0.08)"
                border="1px solid"
                borderColor="rgba(69, 216, 47, 0.30)"
                borderRadius="2xl"
                p={6}
              >
                <HStack spacing={4} align="flex-start">
                  <Box
                    minW="42px"
                    h="42px"
                    borderRadius="full"
                    bg={colorGreen}
                    color="white"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Icon as={FaCheck} boxSize={5} />
                  </Box>

                  <Box>
                    <Text color={colorGreen} fontWeight="900" mb={1}>
                      ניסיון קודם בהדרכה
                    </Text>

                    <Text color="white" fontWeight="600">
                      יתרון משמעותי — אך אינו חובה.
                    </Text>
                  </Box>
                </HStack>
              </Box>
            </Stack>
          </Grid>
        </Container>
      </Box>

      {/* ======================================================
          REQUIREMENTS + SUITABLE
      ====================================================== */}

      <Box sx={whitePatternBackground}>
        <Container maxW="1200px" py={{ base: 18, md: 28 }}>
          <Grid
            templateColumns={{
              base: "1fr",
              lg: "1fr 1fr",
            }}
            gap={10}
          >
            {/* Requirements */}

            <Box>
              <HStack spacing={3} mb={3}>
                <Box w="10px" h="10px" borderRadius="full" bg={colorGreen} />

                <Text color={colorGreen} fontWeight="900">
                  מה אנחנו מחפשים?
                </Text>
              </HStack>

              <Heading
                color={darkNavy}
                fontSize={{ base: "3xl", md: "4xl" }}
                fontWeight="900"
                mb={8}
              >
                דרישות התפקיד
              </Heading>

              <Stack spacing={4}>
                {requirements.map((requirement, index) => (
                  <HStack
                    key={requirement}
                    align="flex-start"
                    spacing={4}
                    p={4}
                    bg={index % 2 === 0 ? greenVerySoft : "gray.50"}
                    borderRadius="xl"
                    borderRight="4px solid"
                    borderColor={index % 2 === 0 ? colorGreen : colorBlue}
                  >
                    <Box
                      minW="32px"
                      h="32px"
                      borderRadius="full"
                      bg={colorGreen}
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      mt="2px"
                    >
                      <Icon as={FaCheck} boxSize={3} />
                    </Box>

                    <Text color="gray.700" fontWeight="600" lineHeight="1.7">
                      {requirement}
                    </Text>
                  </HStack>
                ))}
              </Stack>
            </Box>

            {/* Suitable */}

            <Box
              bg={darkNavy}
              borderRadius="3xl"
              p={{ base: 7, md: 10 }}
              position="relative"
              overflow="hidden"
            >
              <Box
                position="absolute"
                top={0}
                left={0}
                w="130px"
                h="130px"
                borderRadius="full"
                bg="rgba(255, 84, 84, 0.10)"
                transform="translate(-45%, -45%)"
              />

              <Box
                position="absolute"
                bottom={0}
                right={0}
                w="100px"
                h="100px"
                borderRadius="full"
                bg="rgba(69, 216, 47, 0.08)"
                transform="translate(35%, 35%)"
              />

              <Box position="relative">
                <HStack spacing={3} mb={3}>
                  <Box w="10px" h="10px" borderRadius="full" bg={colorRed} />

                  <Text color={colorRed} fontWeight="900">
                    למי זה מתאים?
                  </Text>
                </HStack>

                <Heading
                  color="white"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  fontWeight="900"
                  mb={8}
                >
                  יכול להתאים לכם?
                </Heading>

                <SimpleGrid
                  columns={{
                    base: 1,
                    sm: 2,
                  }}
                  spacing={4}
                >
                  {suitableFor.map((item, index) => {
                    const iconColor =
                      index % 3 === 0
                        ? colorBlue
                        : index % 3 === 1
                          ? colorGreen
                          : colorYellow;

                    return (
                      <HStack
                        key={item.text}
                        bg="rgba(255,255,255,0.06)"
                        border="1px solid"
                        borderColor="rgba(255,255,255,0.08)"
                        borderRadius="xl"
                        p={4}
                        spacing={3}
                        transition="all 0.2s"
                        _hover={{
                          bg: "rgba(255,255,255,0.10)",
                          borderColor: iconColor,
                        }}
                      >
                        <Icon as={item.icon} color={iconColor} boxSize={5} />

                        <Text color="white" fontWeight="600" fontSize="sm">
                          {item.text}
                        </Text>
                      </HStack>
                    );
                  })}
                </SimpleGrid>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* ======================================================
          GALLERY
      ====================================================== */}

      <Box sx={whitePatternBackground} py={{ base: 18, md: 28 }}>
        <Container maxW="1200px">
          <VStack spacing={5} textAlign="center" mb={14}>
            <HStack spacing={3}>
              <Box w="25px" h="5px" bg={colorBlue} borderRadius="full" />

              <Text color={colorBlue} fontWeight="900">
                קצת מהחוויה
              </Text>

              <Box w="25px" h="5px" bg={colorRed} borderRadius="full" />
            </HStack>

            <Heading
              color={darkNavy}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
            >
              כך זה נראה בשטח
            </Heading>
          </VStack>

          <SimpleGrid
            columns={{
              base: 1,
              md: 3,
            }}
            spacing={5}
          >
            {[
              {
                src: images.gallery1,
                alt: "פעילות מהנדסי הדור הבא",
                color: colorBlue,
              },
              {
                src: images.gallery2,
                alt: "פעילות עם ילדים",
                color: colorGreen,
              },
              {
                src: images.gallery3,
                alt: "הדרכה לילדים",
                color: colorRed,
              },
            ].map((image) => (
              <Box
                key={image.src}
                borderRadius="2xl"
                overflow="hidden"
                h={{ base: "300px", md: "390px" }}
                position="relative"
                role="group"
                borderBottom="6px solid"
                borderColor={image.color}
                boxShadow="0 12px 35px rgba(16, 42, 67, 0.10)"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  transition="transform 0.5s"
                  _groupHover={{
                    transform: "scale(1.06)",
                  }}
                />

                <Box
                  position="absolute"
                  inset={0}
                  bg="rgba(16, 42, 67, 0)"
                  transition="all 0.3s"
                  _groupHover={{
                    bg: "rgba(16, 42, 67, 0.16)",
                  }}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ======================================================
          BENEFITS
      ====================================================== */}

      <Box sx={whitePatternBackground} py={{ base: 18, md: 28 }}>
        <Container maxW="1200px">
          <VStack spacing={5} textAlign="center" mb={14}>
            <HStack spacing={3}>
              <Icon as={FaHeart} color={colorRed} />

              <Text color={colorRed} fontWeight="900">
                למה להצטרף אלינו?
              </Text>

              <Icon as={FaHeart} color={colorRed} />
            </HStack>

            <Heading
              color={darkNavy}
              fontSize={{ base: "3xl", md: "5xl" }}
              fontWeight="900"
            >
              מה מחכה לכם?
            </Heading>
          </VStack>

          <SimpleGrid
            columns={{
              base: 1,
              sm: 2,
              lg: 3,
            }}
            spacing={6}
          >
            {benefits.map((benefit) => (
              <Box
                key={benefit.title}
                bg={benefit.background}
                borderRadius="2xl"
                p={7}
                position="relative"
                overflow="hidden"
                border="1px solid"
                borderColor="rgba(16,42,67,0.06)"
                transition="all 0.25s"
                _hover={{
                  transform: "translateY(-7px)",
                  boxShadow: "0 18px 45px rgba(16, 42, 67, 0.10)",
                }}
              >
                <Box
                  position="absolute"
                  top={0}
                  right={0}
                  w="70px"
                  h="70px"
                  borderRadius="full"
                  bg={benefit.color}
                  opacity={0.08}
                  transform="translate(25%, -25%)"
                />

                <Box
                  w="68px"
                  h="68px"
                  borderRadius="2xl"
                  bg="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  mb={6}
                  boxShadow="sm"
                >
                  <Icon as={benefit.icon} boxSize={7} color={benefit.color} />
                </Box>

                <Heading size="md" color={darkNavy} mb={3} fontWeight="900">
                  {benefit.title}
                </Heading>

                <Text color="gray.600" lineHeight="1.85">
                  {benefit.description}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* ======================================================
          LESSON
      ====================================================== */}

      <Box sx={darkNavyPatternBackground} py={{ base: 18, md: 28 }}>
        <Container maxW="1200px">
          <Grid
            templateColumns={{
              base: "1fr",
              md: "1fr 1fr",
            }}
            gap={{ base: 12, md: 18 }}
            alignItems="center"
          >
            <Stack spacing={7}>
              <HStack spacing={3}>
                <Box w="35px" h="5px" bg={colorGreen} borderRadius="full" />

                <Text color={colorGreen} fontWeight="900">
                  איך נראה שיעור?
                </Text>
              </HStack>

              <Heading
                color="white"
                fontSize={{ base: "3xl", md: "5xl" }}
                lineHeight="1.15"
                fontWeight="900"
              >
                לומדים,
                <Box as="span" color={colorBlue}>
                  {" "}
                  יוצרים,
                </Box>{" "}
                מתנסים
              </Heading>

              <Text
                color="whiteAlpha.800"
                fontSize={{ base: "md", md: "lg" }}
                lineHeight="2"
              >
                כל פעילות בנויה סביב רעיון או אתגר. הילדים מקבלים משימה, מתכננים
                פתרון, בונים אותו ובסוף גם רואים אותו עובד.
              </Text>

              <Stack spacing={4}>
                {[
                  {
                    text: "פתיחה והצגת האתגר",
                    color: colorBlue,
                  },
                  {
                    text: "חשיבה ותכנון",
                    color: colorYellow,
                  },
                  {
                    text: "בנייה והתנסות",
                    color: colorGreen,
                  },
                  {
                    text: "בדיקה ושיפור",
                    color: colorRed,
                  },
                ].map((step, index) => (
                  <HStack key={step.text} spacing={4}>
                    <Box
                      minW="44px"
                      h="44px"
                      borderRadius="full"
                      bg={step.color}
                      color={darkNavy}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="900"
                    >
                      {index + 1}
                    </Box>

                    <Text color="white" fontWeight="700">
                      {step.text}
                    </Text>
                  </HStack>
                ))}
              </Stack>
            </Stack>

            <Box
              borderRadius="3xl"
              overflow="hidden"
              position="relative"
              border="5px solid"
              borderColor="rgba(58, 185, 255, 0.20)"
            >
              <Image
                src={images.activity}
                alt="שיעור של מהנדסי הדור הבא"
                w="100%"
                h={{ base: "350px", md: "520px" }}
                objectFit="cover"
              />

              <Box
                position="absolute"
                bottom={5}
                right={5}
                left={5}
                bg="rgba(16, 42, 67, 0.92)"
                backdropFilter="blur(12px)"
                borderRadius="xl"
                p={5}
                border="1px solid"
                borderColor="rgba(69, 216, 47, 0.35)"
              >
                <HStack spacing={3}>
                  <Box w="10px" h="10px" borderRadius="full" bg={colorGreen} />

                  <Text color={colorGreen} fontWeight="900">
                    המטרה
                  </Text>
                </HStack>

                <Text color="white" mt={2}>
                  לגרום לילדים להבין שהם מסוגלים ליצור דברים בעצמם.
                </Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* ======================================================
          AREAS
      ====================================================== */}

      <Box
        sx={whitePatternBackground}
        py={{ base: 18, md: 24 }}
        position="relative"
      >
        <Box
          position="absolute"
          right={0}
          top="50%"
          transform="translateY(-50%)"
          w="7px"
          h="180px"
          bg={colorRed}
        />

        <Container maxW="1000px">
          <VStack spacing={5} textAlign="center" mb={11}>
            <Box
              w="65px"
              h="65px"
              borderRadius="2xl"
              bg={redSoft}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={FaMapMarkerAlt} color={colorRed} boxSize={7} />
            </Box>

            <Heading
              color={darkNavy}
              fontSize={{ base: "3xl", md: "4xl" }}
              fontWeight="900"
            >
              מגייסים מדריכים בכל הארץ
            </Heading>

            <Text color="gray.600" maxW="700px" lineHeight="1.9">
              אנחנו מחפשים מדריכים ומדריכות באזורים שונים בארץ. השאירו פרטים
              ונבדוק את האפשרויות הקיימות באזור שלכם.
            </Text>
          </VStack>

          <Flex justify="center" wrap="wrap" gap={4}>
            {areas.map((area, index) => {
              const colors = [
                colorBlue,
                colorGreen,
                colorYellow,
                colorRed,
                colorBlue,
                colorGreen,
                colorRed,
              ];

              const areaColor = colors[index];

              return (
                <Box
                  key={area}
                  bg="white"
                  border="2px solid"
                  borderColor={areaColor}
                  borderRadius="full"
                  px={7}
                  py={3}
                  color={darkNavy}
                  fontWeight="800"
                  transition="all 0.2s"
                  boxShadow="0 4px 15px rgba(16, 42, 67, 0.05)"
                  _hover={{
                    bg: areaColor,
                    color: areaColor === colorYellow ? darkNavy : "white",
                    transform: "translateY(-3px)",
                    boxShadow: `0 8px 20px ${areaColor}33`,
                  }}
                >
                  {area}
                </Box>
              );
            })}
          </Flex>
        </Container>
      </Box>

      {/* ======================================================
          APPLICATION
      ====================================================== */}

      <Box
        id="application"
        sx={darkNavyPatternBackground}
        py={{ base: 18, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        {/* Blue decoration */}

        <Box
          position="absolute"
          w="400px"
          h="400px"
          borderRadius="full"
          border="60px solid"
          borderColor="rgba(58, 185, 255, 0.06)"
          top="-250px"
          right="-180px"
        />

        {/* Green decoration */}

        <Box
          position="absolute"
          w="300px"
          h="300px"
          borderRadius="full"
          border="45px solid"
          borderColor="rgba(69, 216, 47, 0.05)"
          bottom="-200px"
          left="-150px"
        />

        <Container maxW="900px" position="relative" zIndex={1}>
          <VStack spacing={6} textAlign="center">
            <HStack spacing={3}>
              <Box w="35px" h="5px" bg={colorRed} borderRadius="full" />

              <Box
                bg={colorYellow}
                color={darkNavy}
                borderRadius="full"
                px={5}
                py={2}
                fontWeight="900"
              >
                מתחילים כאן
              </Box>

              <Box w="35px" h="5px" bg={colorGreen} borderRadius="full" />
            </HStack>

            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "5xl" }}
              lineHeight="1.15"
              fontWeight="900"
            >
              רוצים להצטרף לצוות?
            </Heading>

            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "md", md: "xl" }}
              lineHeight="1.9"
              maxW="700px"
            >
              שלחו לנו כמה פרטים על עצמכם וניצור איתכם קשר להמשך התהליך.
            </Text>

            <SimpleGrid
              columns={{
                base: 1,
                sm: 2,
              }}
              spacing={4}
              pt={5}
              w="100%"
              maxW="650px"
            >
              <Button
                as="a"
                href="mailto:info@nextengineers.co.il"
                bg={colorYellow}
                color={darkNavy}
                size="lg"
                py={7}
                borderRadius="xl"
                fontWeight="900"
                leftIcon={<FaEnvelope />}
                _hover={{
                  bg: colorYellow,
                  transform: "translateY(-4px)",
                  boxShadow: "0 15px 35px rgba(254, 219, 3, 0.25)",
                }}
                transition="all 0.25s"
              >
                שלחו קורות חיים
              </Button>

              <Button
                as="a"
                href="tel:0500000000"
                bg={colorGreen}
                color={darkNavy}
                size="lg"
                py={7}
                borderRadius="xl"
                fontWeight="900"
                leftIcon={<FaPhone />}
                _hover={{
                  bg: colorGreen,
                  transform: "translateY(-4px)",
                  boxShadow: "0 15px 35px rgba(69, 216, 47, 0.25)",
                }}
                transition="all 0.25s"
              >
                צרו איתנו קשר
              </Button>
            </SimpleGrid>

            <Box
              mt={4}
              bg="rgba(255, 84, 84, 0.08)"
              border="1px solid"
              borderColor="rgba(255, 84, 84, 0.20)"
              borderRadius="xl"
              px={6}
              py={4}
            >
              <HStack spacing={3}>
                <Icon as={FaEnvelope} color={colorRed} />

                <Text color="white" fontSize="sm" dir="ltr">
                  info@nextengineers.co.il
                </Text>
              </HStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* ======================================================
          BOTTOM BRAND STRIPE
      ====================================================== */}

      <Flex h="8px">
        <Box flex={1} bg={colorBlue} />

        <Box flex={1} bg={colorGreen} />

        <Box flex={1} bg={colorYellow} />

        <Box flex={1} bg={colorRed} />
      </Flex>
    </Box>
  );
};

export default Required;
