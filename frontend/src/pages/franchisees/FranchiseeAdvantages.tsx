import {
  Box,
  Grid,
  Heading,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import Acard from "../../components/Acard";
import pattern from "../../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const FranchiseeAdvantages = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const backgroundColor = "#3AB9FF";
  return (
    <Box
      display="flex"
      justifyContent="center"
      background={`linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`}
      backgroundBlendMode="overlay"
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
    >
      <VStack mt={10} mb={10}>
        <Heading color="white" fontSize="65px" mb="20px">
          יתרונות
        </Heading>
        <Heading
          css={{ direction: "rtl" }}
          color="#4682B4"
          backgroundColor="#FEDB03"
          fontSize="xx-large"
          mb="20px"
        >
          אתה לא רק בוחר בעסק חדש - אלא אורח חיים חדש!
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
          gap={3}
          alignItems="center"
        >
          <Acard
            number={1}
            heading="גמישות"
            body="הזיכיון שלנו מאפשר לך לפתוח עסק שיעניק לך את החופש והגמישות שלך ליהנות מהחיים שלך, לבלות יותר זמן עם המשפחה שלך ולחיות בתנאים המתאימים לך ביותר. בנוסף, מתי תראה את התלמידים שלך
        להעשיר את הידע שלהם ולפתח מיומנויות ועם זאת להיות באמת מאושרים ומסופקים, סביר להניח שזה ייצור בכם חיוניות מוגברת, ויעניק לכם אנרגיה וסיפוק רב שלא ניתן למצוא בשום מקום."
          />
          <Acard
            number={2}
            heading="פשטות הפעולה"
            body="היתרון הנוסף של המודל הפיננסי של הזיכיון הוא הפשטות שלו -
ההשקעה הראשונית קטנה יחסית, אין ניהול של מיותר
מניות, וההוצאות החודשיות קטנות יחסית."
          />
          <Acard
            number={3}
            heading="לא דרוש ידע ונסיון קודם"
            body="אינך צריך להיות בעל רקע חינוכי או מנהלי כלשהו. כזכיין שלנו תקבל תמיכה מלאה והכשרה מקצועית וניהולית לאורך כל הדרך."
          />
          <Acard
            number={4}
            heading="אין צורך לפתוח עסק חדש מאפס"
            body="תוכלו להמשיך וליהנות מפעילות עסקית קיימת ומהידע והניסיון שצברה הרשת במהלך השנים. בנוסף, נחבר אתכם למערכת תמיכה דיגיטלית שתאפשר לכם ליהנות ולהשתמש בהרבה חומרי עזר. החל בסרטוני הדרכה, וכלה בחומרי פרסום דיגיטליים."
          />
          <Acard
            number={5}
            heading="השקעה שיווקית נמוכה ונאמנות לקוחות גבוהה"
            body="רוב הפעילות העסקית נסגרת פעם אחת לפני תחילת השנה ולרוב נמשכת לאורך כל השנה ואף למספר שנים, כך שבדרך כלל ניתן לייצר שיעור גבוה של לקוחות חוזרים ומרוצים."
          />
        </Grid>
      </VStack>
    </Box>
  );
};

export default FranchiseeAdvantages;
