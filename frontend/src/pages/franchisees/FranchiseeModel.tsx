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
import image4 from "../../assets/franchisees-src/class-small-size.webp";
import image5 from "../../assets/franchisees-src/תמונה1.webp";
import bottomImage from "../../assets/franchisees-src/2קופסאות-01.webp";
import Vcard from "../../components/Vcard";
import ImageCarousel from "../../components/ImageCarousel";
import scrollimg1 from "../../assets/franchisees-src/scrollimg1.webp";
import scrollimg2 from "../../assets/franchisees-src/scrollimg2.webp";
import scrollimg3 from "../../assets/franchisees-src/scrollimg3.webp";
import scrollimg4 from "../../assets/franchisees-src/scrollimg4.webp";
import HeroVideo from "../../components/HeroVideo";
const FranchiseeModel = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const scrollimgarr = [scrollimg1, scrollimg2, scrollimg3, scrollimg4];
  const scrollimgarr2 = [image1, image2, image3, image4];

  return (
    <>
      <Box
        backgroundColor="gray.100"
        backgroundImage={`url(${pattern})`}
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          pt="70px"
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
          image={image4}
          heading="1. זכיון מבוסס קהילה "
          body="מאפשר לך ליצור שותפויות עם מרכזים קהילתיים, בתי ספר, ספריות, מוזיאוני מדע, מוסדות דת וכל מקום אחר בו עשויות להתקיים פעילויות לילדים. אפשרות זו כוללת אופציה לזיכיון ישיר, או לזיכיון ראשי."
          side="right"
          v2={true}
        />
        <Vcard
          image={image5}
          heading="2. זיכיון מבוסס מרכז למידה והתנסות"
          body="פתיחת מרכז למידה והתנסות משלך, שבתוכו תפעיל את מגוון התכניות, הקורסים והפעילויות שלנו. אנו נלווה אתכם בתהליך החל ממציאת המקום המתאים ועד ליצירת אירוע פתיחה מוצלח."
          side="right"
          v2={true}
        />
        <Vcard
          image={scrollimgarr}
          heading="להבין איך זה עובד:"
          body={`הזכיינים שלנו מקבלים מאיתנו הזדמנות מעורבות ארוכת טווח, דרכה הם מתחברים לתחום חינוכי עם פוטנציאל רב.

            • בחיבור אלינו הם מקבלים מאיתנו את היכולת, המוצרים והשיטות הייחודיות,
            המאפשרים להם להוביל חינוך משמעותי ואיכותי.
            • כזכיין שלנו תהיה אחראי על אזור גיאוגרפי, שבו תקבל בִּלעָדִיוּת.
            • תקבלו גישה לתוכניות הלימוד הייחודיות שפיתחנו וגם ל-Next ערכות מהנדס, שפותחו על ידינו. תהיו מעודכנים בחידושים החמים ביותר שפותחו על ידי החברה, הכלים התפעוליים והשיווקיים וכל כלי שישרת את החזון, העסק והחינוך של המהנדסים הבאים.
            
            • ניתן להפעיל את תכניות הלימוד שלנו במגוון בתי ספר, מתנ"סים, מצוינות מרכזים, צהרונים, גני ילדים ועוד - באזור הזכיינות שלכם.
            • נאפשר לך להרחיב את העסק ולהגדיל את ההכנסה על ידי העסקת עובדים מתחת הפיקוח שלך.`}
          side="left"
        />

        {/* --------------------------------------------- */}
        <Vcard
          image={image1}
          heading="עשרות מקורות הכנסה"
          body="רק דמיינו את האפשרויות העסקיות העומדות בפניכם עם למעלה מ-100 נושאים ופעילויות שתוכלו להציע לתוכניות שלנו. בנוסף למסלולי הלימוד, תוכלו להגדיל את זרם ההכנסה באמצעות סדנאות איכותיות שפיתחנו לקייטנות, מסיבות יום הולדת, ערבי צוות, ימים מיוחדים ואירועים שונים."
          side="left"
          bottomImage={bottomImage}
        />
        <Vcard
          image={image2}
          heading="אנו מספקים תמיכה מדהימה"
          body="כזכיין שלנו אתה מצטרף למשפחה חמה, תומכת ואוהדת המעוניינת בהצלחתך - אנו נלווה אותך לאורך כל שנות הזיכיון. ניתן להתייעץ איתנו ועם קהילת הזכיינים שלנו, בכל נושא הקשור לתפעול העסק."
          side="left"
        />
        <Vcard
          image={image3}
          heading="אנחנו חותרים למצוינות"
          body="אנו מאמינים שהצלחה היא תוצר של פעילויות שנעשות בצורה נכונה.
התוכניות שלנו מעודדות ילדים להצליח. אנו משתמשים במשוב חיובי ששם את הצלחת הילדים במרכז העשייה. הילדים בתכנית שלנו לומדים לאהוב למידה באמצעות משחק.
כשהילדים מאושרים - הם ההורים מאושרים - והעסק שלך יפרח."
          side="left"
        />
        <HeroVideo noBackground={true} />
      </Box>
    </>
  );
};

export default FranchiseeModel;
