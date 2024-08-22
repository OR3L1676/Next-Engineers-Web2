import {
  Box,
  Image,
  Text,
  HStack,
  useBreakpointValue,
  Heading,
} from "@chakra-ui/react";
import pattern from "../../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";
import image1 from "../../assets/franchisees-src/DSC_4698--.webp";
import image2 from "../../assets/franchisees-src/PhotoReal_A_HAPPY_client.webp";
import image3 from "../../assets/franchisees-src/DSC02882.webp";
import bottomImage from "../../assets/franchisees-src/2קופסאות-01.webp";
import Vcard from "../../components/Vcard";

const FranchiseeModel = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box
        backgroundImage={`url(${pattern})`}
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          mt="70px"
          mb="20px"
          css={{ direction: "rtl" }}
          textAlign={isLargeScreen ? "right" : "center"}
          px="10px"
        >
          <Heading fontSize="40px" color="#3DC404" mb="20px">
            הבנת המודל העסקי שלנו
          </Heading>
          <Text fontSize="larger" color="#3DC404">
            אנו מאפשרים לזכיינים שלנו לבחור באחת מ-2 אפשרויות:
          </Text>
        </Box>
        <Vcard
          image={image1}
          heading="עשרות מקורות הכנסה"
          body="רק דמיינו את האפשרויות העסקיות העומדות בפניכם עם למעלה מ-100 נושאים ופעילויות שתוכלו להציע לתוכניות שלנו. בנוסף למסלולי הלימוד, תוכלו להגדיל את זרם ההכנסה באמצעות סדנאות איכותיות שפיתחנו לקייטנות, מסיבות יום הולדת, ערבי צוות, ימים מיוחדים ואירועים שונים."
          side="left"
        />
        <Vcard
          image={image2}
          heading="עשרות מקורות הכנסה"
          body="רק דמיינו את האפשרויות העסקיות העומדות בפניכם עם למעלה מ-100 נושאים ופעילויות שתוכלו להציע לתוכניות שלנו. בנוסף למסלולי הלימוד, תוכלו להגדיל את זרם ההכנסה באמצעות סדנאות איכותיות שפיתחנו לקייטנות, מסיבות יום הולדת, ערבי צוות, ימים מיוחדים ואירועים שונים."
          side="right"
          bottomImage={bottomImage}
        />
        <Vcard
          image={image3}
          heading="עשרות מקורות הכנסה"
          body="רק דמיינו את האפשרויות העסקיות העומדות בפניכם עם למעלה מ-100 נושאים ופעילויות שתוכלו להציע לתוכניות שלנו. בנוסף למסלולי הלימוד, תוכלו להגדיל את זרם ההכנסה באמצעות סדנאות איכותיות שפיתחנו לקייטנות, מסיבות יום הולדת, ערבי צוות, ימים מיוחדים ואירועים שונים."
          side="left"
        />
      </Box>
    </>
  );
};

export default FranchiseeModel;
