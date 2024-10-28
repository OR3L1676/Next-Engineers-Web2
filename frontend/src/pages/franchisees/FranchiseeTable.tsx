import { Box, Grid } from "@chakra-ui/react";
import React from "react";
import FTcard from "../../components/FTcard";
import tableimg1 from "../../assets/franchisees-src/tableimgs/03355b_8254640432be4e9b933df0039c4bb6d1~mv2.webp";
import tableimg2 from "../../assets/franchisees-src/tableimgs/Abir Yunes_edited2.webp";
import tableimg3 from "../../assets/franchisees-src/tableimgs/Inna Simanov3.webp";
import tableimg4 from "../../assets/franchisees-src/tableimgs/Lior Dashkotai4.webp";
import tableimg5 from "../../assets/franchisees-src/tableimgs/Gal Ohana _edited5.webp";
import tableimg6 from "../../assets/franchisees-src/tableimgs/Itai Shosberger6.webp";
import tableimg7 from "../../assets/franchisees-src/tableimgs/Dan Lerner7.webp";
import tableimg8 from "../../assets/franchisees-src/tableimgs/Shlomi Fenso8.webp";

import pattern from "../../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const FranchiseeTable = () => {
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundColor="gray.200"
        backgroundImage={`url(${pattern})`}
        backgroundBlendMode="overlay"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
        py={8}
      >
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(4, 1fr)",
          }}
          gap={2}
        >
          <FTcard
            image={tableimg1}
            heading={`אשרף סגיר, זכיין
            (סניף כרמיאל)`}
            body="כבר כמה שנים שאני מחפש לממש את אהבתי לחינוך מתוך רצון להשתלב בעולם החדשנות והסטארטאפים. כשהכרתי את Next Engineers הבנתי שזה בדיוק מה שאני מחפש. לאחר מספר פגישות עם נציגי הרשת וההנהלה הבכירה, החלטתי שאני הולך על זה בכל הכוח. העולם שלנו מתפתח כל הזמן. מוסדות החינוך של המחר צריכים להתאים עצמם להתפתחות הטכנולוגית. אני בהחלט מאמין שילדים שנחשפים היום למקצועות STEAM, מקבלים כלים משמעותיים להצלחה בעתיד. הסניף שלי פועל כבר כמה שנים. הלקוחות שלנו לא מרוצים וזה מאוד חשוב לי, כי זה מאפשר עבודה עם הלקוחות לאורך שנים רבות. אני חושב שמדובר בשילוב של תכנית מצוינת הכוללת תוצרים מדהימים, ספרות עשירה, חומרים דיגיטליים והדרכה לכל נושא, ומצד שני – ההכשרה שאני והמורים שלי מקבלים מהרשת היא יסודית ומעמיקה. הרשת הזו לא נחה: הם ממשיכים לשפר את השיטות, התכניות והמוצרים שלהם כל הזמן ובשקיפות מלאה מול הזכיינים על מנת להעניק תמיכה, ולפתור בעיות וקשיים. מדובר במשפחה צבעונית במיוחד שתומכת אחד בשני!"
            backgroundColor="red"
          />
          <FTcard
            image={tableimg2}
            heading={`אביר יונס, זכיין של סניף החברה הערבית`}
            body="עבדתי בתעשיית החינוך הפורמלי כמורה. וכאם ראיתי את הצורך הגובר בגישה חינוכית חדשה, כזו שמלמדת את הילדים ללא כפייה. שמעתי על Next Engineers והגעתי למשרדיהם לפגישת ייעוץ. יצרנו קשר מיידי והחלטתי להצטרף אליהם. אני ממש שמח שעשיתי את השינוי הזה. זה נותן לי סיפוק גדול. הילדים מאוד אוהבים את התוכנית שלנו!"
            backgroundColor="yellow"
          />
          <FTcard
            image={tableimg3}
            heading={`אינה סימנוב (מורה)`}
            body="עברתי בין הרבה עבודות ולא מצאתי את מקומי במשך שנים. הגעתי לרשת Next Engineers והתרגשתי מהרגע הראשון - עם אנשים איכותיים וצוות מגובש שרק הולך וגדל ומתפתח, אופן העבודה שלהם מאוד ייחודי ונכון לדעתי. אני חושב שמה שהקסים אותי זה - מעבר לכך שהתכניות של הרשת משלבות למידה ותחושת הישג לתלמידים, הן מפתחות אצלי גם תחושת הישג והצלחה. השיטות של המהנדסים הבאים הם שילוב של כיף, משחק ולמידה איכותית, ובזכות אלו אנו פותחים בפני הילדים צוהר ללמידה איכותית ומהנה, הם לומדים שלמידה יכולה להיות מהנה ומרגשת, והם יוצאים עם כלים ויכולות. שיעזור להם בעתיד. השמחה והאושר שמציפים אותי, כשאני רואה את ההתלהבות של הילדים במהלך השיעור, שווים כל השקעה. מבחינתי השגתי את מה שרציתי: לעבוד עם ילדים, בהנאה ולהרוויח מזה כסף."
            backgroundColor="red"
          />
          <FTcard
            image={tableimg4}
            heading={`ליאור דשקוטאי, זכיין (סניף ירושלים)`}
            body="הצטרפתי לרשת Next Engineers בתור זכיין. לפני שלוש שנים והגיע לבית חם ותומך. מייסדי הרשת הם אנשים טובים ואדיבים, כאלה שדואגים להצלחתך האישית ומלווים אותך בכל עת. עבודה עם ילדים היא עבודה דינאמית ומספקת. התוכניות שלנו זוכות לשבחים ולפידבקים טובים במיוחד הן מהילדים והן מההורים ומנהלי המרכזים. הילדים מוצאים עניין בשיעורים, מערכי השיעורים מגוונים ומשתנים והילדים אוהבים את זה מאוד. לסיכום, אני שמח וגאה להיות חלק מרשת המהנדסים מהדור הבא!"
            backgroundColor="yellow"
          />
          <FTcard
            image={tableimg5}
            heading={`גל אוחנה - זכיין (P.H-K)`}
            body="היי, שמי גל אוחנה, אני עובדת עם ילדים מזה מספר שנים בתחום ההדרכה.
רציתי להיות בעל עסק מצליח, לנהל עובדים, ובמקביל לעסוק במקצוע בעל ערך משמעותי.
את הצרכים הללו מצאתי ברשת של Next Engineers, שמתמחה בעולם העסקים החינוכי.

אני עדיין זוכר את היום שבו קבעתי פגישת היכרות עם מנהלי הרשת והתאהבתי בהם ממבט ראשון."
            backgroundColor="yellow"
          />
          <FTcard
            image={tableimg6}
            heading={`איתי שוסברגר, זכיין (כפר-סבא)`}
            body="תמיד נמשכתי לחינוך והוראה כי לדעתי אין שליחות חשובה יותר מחינוך דור העתיד שלנו. אחרי שנים רבות כמהנדס, הנושא היה חשוב לי וכך עשיתי את המעבר והתחלתי ללמד במערכת החינוך.
כשעלתה האפשרות לפתוח סניף של מהנדסים הבאים, לא היססתי לרגע.
אין לי ספק שהוראה בצורה שונה מהסטנדרט ומהדרכים המקובלות בבתי הספר, הוראה המשלבת משחק והנאה היא הדרך להעלות את הילדים לדרך, להקנות ידע וללמד אותם לאהוב למידה.

בברכה, איתי שוסברגר, זכיין (ק.סבא)"
            backgroundColor="red"
          />
          <FTcard
            image={tableimg7}
            heading={`דן לרנר, זכיין (K.Ono)`}
            body="החינוך היעיל ביותר הוא לתת לילד לשחק בדברים נפלאים
אני רואה בעבודה שלי שליחות.
כשאני עובדת עם הילדים אני מתמלאת באנרגיות טובות ומחודשות.

אני אוהב לעבוד כזכיין ברשת מהנדסים נקסט בגלל המסלול החינוכי המיוחד שהם פיתחו והאנשים הטובים שמרכיבים אותו.
השיטות שלהם משלבות למידה איכותית עם משחק וכיף.

המודל העסקי שלהם פשוט, קל לתפעול ומאפשר הרחבה והגדלה של היקף העבודה, ושל הלקוחות.

אני מרוצה מהמחזור הכספי של הסניף שלי, ושמח להיות מחובר לרשת המהנדסים הבאים.

דן לרנר, זכיין (K.Ono)"
            backgroundColor="yellow"
          />
          <FTcard
            image={tableimg8}
            heading={`שלומי פנסו (מורה)`}
            body="אני עובד עם Next Engineers כבר 10 שנים.
הצטרפתי לרשת כי אני מאוד אוהב את התחום הזה. המנהלים שלי הם הכי טובים, הם נותנים הרגשה טובה ואני מאוד נהנה לעבוד ברשת הזו.

בחרתי לעבוד עם ילדים כי אני מרגישה שאני יכולה לתרום ערכים מעבר ללמידה: אני מעבירה להם שיעורים חינוכיים ומהנים ובנוסף נותנת להם ערכים ומיומנויות שונות. מרגש אותי שאני יכול להשפיע ולתת להם ערך נוסף להמשך הלמידה, ומחזק אותי כשאני רואה את ההתרגשות וההתלהבות שלהם.

אני חושב שאני מקבל הרבה יותר ממה שאני נותן. הערכה מהילדים ומהרשת, תחושת סיפוק וערך עצמי, גם כסף טוב ורווח כספי.

בברכה, שלומי פנסו (מורה)"
            backgroundColor="red"
          />
        </Grid>
      </Box>
    </>
  );
};

export default FranchiseeTable;