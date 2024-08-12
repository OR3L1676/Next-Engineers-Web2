import {
  Box,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import MCard from "./Mcard";
import image1 from "../assets/couldbegood/cardsimages/תמונה-שבועז-הכין-עם-טישטוש-של-החוברת-בעברית.jpg";
import image2 from "../assets/couldbegood/cardsimages/ילד-מחייך-לאליה.jpg";
import image3 from "../assets/couldbegood/cardsimages/משחק-פרצופים.jpg";
import image4 from "../assets/couldbegood/cardsimages/DSC_6388.jpg";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const CardGrid = () => {
  const backgroundColor = "#3AB9FF";
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      background={`linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`}
      backgroundBlendMode="overlay"
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
      py={10}
      px={10}
      width="100%"
      minHeight="100vh"
    >
      <Box textAlign="center" color="white" mb={10}>
        <Heading fontSize="xxx-large" mb={5}>
          המתודולוגיה שלנו
        </Heading>
        <Heading fontSize="large">
          הבסיס המשותף לכל התכניות שלנו הוא שיטות ההוראה. שיטת הלימוד שלנו
          <br />
          :מבוססת על ארבעה עקרונות
        </Heading>
      </Box>
      <Box maxW="1000px" width="100%">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={10}
          justifyContent="center"
          alignItems="center"
        >
          <GridItem>
            <MCard
              heading=":לימוד עצמי"
              body="למידה עצמית המאפשרת התנסות מעשית ומערבת את החושים והאינטואיציה גורמת לילדים להתחבר ולהזדהות עם הלמידה. לדוגמא: כולנו למדנו על כוח המשיכה, אבל אם נראה תפוח נופל מהעץ נבין באופן אינטואיטיבי שיש כוח שמושך אותו למטה."
              image={image1}
              color="#FEDB03"
            />
          </GridItem>
          <GridItem>
            <MCard
              heading=":חיזוקים חיוביים"
              body="אנו מאמינים שהלמידה הופכת לחוויה נעימה כאשר התלמיד שלנו מרגיש טוב עם עצמו. כאשר אנו מחמיאים לילדים, אם על ידי חיזוק חברתי או חומרי, אנו מחזקים את הביטחון העצמי של הילדים ומעודדים אותם להשתתף, לשאול שאלות ולהביע את עצמם ללא חשש מדחייה או כישלון."
              image={image2}
              color="lightseagreen"
            />
          </GridItem>
          <GridItem>
            <MCard
              heading=":למידה חווייתית - על ידי משחק והנאה"
              body="אנו מאמינים שיש קשר ישיר בין הנאה - תוך כדי לימוד - לבין איכות חווית הלמידה.
התוכניות שלנו מעודדות ילדים להשתמש בצורך הטבעי שלהם לשחק ולהנות; ועל ידי כך, תהיה לך למידה עוצמתית ואיכותית, אשר יוצרת את אהבתם ללמידה בהווה ובעתיד."
              image={image3}
              color="#3BC402"
            />
          </GridItem>
          <GridItem>
            <MCard
              heading=":שימוש בחושים"
              body="אנו מאמינים שככל שמעורבים יותר חושים, עוצמת החוויה גדלה ואיתה - גם עוצמת הלמידה גדלה.
הילדים בתוכניות שלנו עושים שימוש בלמידה על ידי התבוננות במודל, ומגע איתו. מערכי השיעור שלנו משלבים איורי מדיה חזותיים ואודיו."
              image={image4}
              color="red"
            />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default CardGrid;
