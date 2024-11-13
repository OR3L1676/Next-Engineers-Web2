import React from "react";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";
import { Box, Heading, Text, useBreakpointValue } from "@chakra-ui/react";
import PlansBody from "../components/PlansBody";
import logo from "../assets/couldbegood/inventors_square-01-01.webp";
import mamageniusbackground from "../assets/plans-src/mamageniusbackground.webp";
import crazyinvenorsbackground from "../assets/plans-src/crazyinventorsbackground.webp";
import inventorsquaredbackground1 from "../assets/plans-src/inventorsquaredbackground1.webp";
import robologiebackground from "../assets/plans-src/robologiebackground.webp";
import firstgradesbackground from "../assets/plans-src/firstgradebackground.webp";
import secondgradesbackground from "../assets/plans-src/secondgradebackground.webp";
import mamageniuslogo from "../assets/plans-src/גאון_של_אמא.webp";
import crazyinventorslogo from "../assets/plans-src/ממציאים_משוגעים.webp";
import inventorsquaredlogo from "../assets/plans-src/ממציאים_בריבוע.webp";
import robologielogo from "../assets/plans-src/רובולוגי.webp";
import firstgradeslogo from "../assets/plans-src/תלן.webp";
import ContactUsFooter from "../components/ContactUsFooter";

const Plans = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const backgroundColor = "#3AB9FF";
  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="column"
        px={{ base: "20px", md: "50px", lg: "300px" }}
        py={isLargeScreen ? 10 : 0}
        pb={isLargeScreen ? 10 : 5}
        pt={isLargeScreen ? "140px" : "100px"}
        background={`linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`}
        backgroundBlendMode="overlay"
        backgroundPosition="center"
        backgroundSize="contain"
        backgroundRepeat="repeat"
        textAlign="justify"
        css={{ direction: "rtl" }}
      >
        <Heading
          fontSize={isLargeScreen ? "50px" : "40px"}
          color="white"
          mb="20px"
        >
          התוכניות שלנו
        </Heading>
        <Text
          maxW="1000px"
          fontSize={isLargeScreen ? "x-large" : "large"}
          color="white"
        >
          התכניות החינוכיות שלנו נבנו בהתאם לאוכלוסיות יעד שונות. השיעורים שלנו
          מבוססים על שבוע, במשך 10 חודשים בשנה. התכניות בנויות כך שהן מאפשרות
          לילדים להמשיך לתכנית המשך, לאחר שסיימו את התכנית הבסיסית.
        </Text>
      </Box>

      <PlansBody
        programHeader="גאון של אמא"
        progrmHeaderDes1="גילאים: 4-6"
        progrmHeaderDes2="60 דקות שיעור"
        programImage={mamageniusbackground}
        programLogo={mamageniuslogo}
        colorPDes="#FEDB03" // yellow
        programDes={`תוכנית "גאון של אמא" חושפת ילדים בגלאי גן למושגים וידע בסיסי מעולמות שונים.
במהלך השיעורים הילדים עושים שימוש בערכת בניה ייחודית שפיתחנו ובהוראות הרכבה אשר פותחו על ידנו במיוחד עבור "תכנית גאון של אמא".
באמצעות הערכה הם מתכננים ובונים בכל שיעור מודלים פשוטים ומלהיבים, אשר ממחישים להם את הידע שנחשפו אליו. 
השיעורים שלנו משלבים ניסויים וכן משימות משחקיות וקבוצתיות ומאפשרות לילדים לחזק מיומנויות אישיות וחברתיות וכן לשפר את הביטחון העצמי שלהם. 

אנו מאמינים שילדים צעירים אשר נחשפים לתהליך למידה חוויתי ועוצמתי, אשר עושה שימוש במשחק והנאה, מפתחים אהבה ללמידה, מה שמקנה להם כלים להצלחה בהווה ובעתיד. 
`}
      />
      <PlansBody
        programHeader="ממציאים משוגעים"
        progrmHeaderDes1="גילאים: כיתות א' ו-ב'"
        progrmHeaderDes2="60-75 דקות שיעור"
        programImage={crazyinvenorsbackground}
        programLogo={crazyinventorslogo}
        colorPDes="#3BC402" // green
        programDes={`תוכנית "ממציאים משוגעים" פותחה עבור ילדי בה"ס יסודי, בכיתות א-ב.
          התוכנית חושפת את הילדים למושגים שונים עולמות הידע, המדע, הטכנולוגיה והחשבון. 
          
          כל שיעור מתחיל עם חלק תאורטי המוצג בצורה חווייתית כל שהיא : סיפור ,המחשה ,ומשחק מקדים. לאחר מכן הילדים מקבלים ערכות הרכבה ייחודיות ומהודרות אשר פותחו במהנדסי הדור הבא, והוראות הרכבה, באמצעותם הם מתכננים ובונים את הדגם של אותו שיעור. 
          
          תהליך הלמידה מתבצע חווייתית, משחקית ומאתגרת הילדים בשיעורים שלנו לא ממש מרגישים שבאו ללמוד, מכיוון שהלמידה נעשית תוך כדי הרבה הנאה ריגוש ושמחת יצירה.    
          השיעורים שלנו מועברים בצורה מובנת כך שידע חדש שנלמד נתמך על ידע קודם ובנוסף מתקיימת חזרה על ידע ומושגים שנלמדו בעבר, תוך העמקתם וחקירתם מזוויות נוספות. 
          `}
      />
      <PlansBody
        programHeader="ממציאים בריבוע"
        progrmHeaderDes1="גילאים: כיתות ג'-ה'"
        progrmHeaderDes2="60-75 דקות שיעור"
        programImage={inventorsquaredbackground1}
        programLogo={inventorsquaredlogo}
        colorPDes="#3AB9FF" // blue
        programDes={`תוכנית "ממציאים בריבוע" פותחה עבור ילדי בה"ס יסודי, בכיתות ג-ה.
במהלך התוכנית תבוצע הרחבה של הידע ועולם המושגים שנרכשו כבר וכן למידה של נושאים נוספים מתחום המדע, ההנדסה, הטכנולוגיה, החשבון והיצירתיות (STEAM)

הילדים עושים שימוש בערכות הרכבה ייחודיות והוראות הרכבה ובונים מודלים אשר ממחישים להם את העקרונות שנלמדו בשיעור. 
רוב הדגמים כוללים הצעה לפעילות משחק או משימת הרחבה ואתגר למתקדמים.

בשיעורים הילדים רוכשים ידע תיאורטי ויישומי שזהה במתכונתו לחלק מהידע שמועבר במוסדות להשכלה גבוהה, וכן מפתחים מיומנויות שונות.
`}
      />
      <PlansBody
        programHeader="רובולוגי"
        progrmHeaderDes1="בית ספר: כיתות ג'-ה'"
        progrmHeaderDes2="45-60 דקות שיעור"
        programImage={robologiebackground}
        programLogo={robologielogo}
        colorPDes="#FF5454" // red
        programDes={`התוכנית מתאימה לילדי בית ספר יסודי בכיתות א'-ב'. במהלך התוכנית מקבלים הילדים ידע תאורטי ומעשי בתחומי המדע, ההנדסה והמתמטיקה. הילדים עושים שימוש בערכות פעילות ייחודיות, באמצעותם הם בונים דגמים שונים ומרגשים, אשר ממחישים להם את העקרונות הנלמדים בשיעור.

הילדים לומדים באופן חוויתי ועצמאי באמצעות שימוש במשחק והתבוננות באופן הפעולה של הדגמים, השיעורים מלווים באתגרים ומשימות המעודדות את הילדים לחשוב בצורה ממציאנית תוך שימוש בדמיון.

התוכנית משתמשת במודל הלמידה הספירלית, אשר מאפשרת לתלמידים ללמוד נושא כל שהוא ולפגוש אותו ברמה עמוקה ומפורטת יותר בהמשך.

התוכנית דומה לתוכנית "גאון של אמא" ומותאמת במבנה שלה לסביבה הבית ספרית.`}
      />
      <PlansBody
        programHeader="תכנית מהנדסי הדור הבא"
        progrmHeaderDes1="בית ספר: כיתות א' ו-ב'"
        progrmHeaderDes2="45 דקות שיעור"
        programImage={firstgradesbackground}
        programLogo={firstgradeslogo}
        colorPDes="#FEDB03" // yellow
        programDes={`התוכנית מתאימה לילדי בית ספר יסודי בכיתות א'-ב'. במהלך התוכנית מקבלים הילדים ידע תאורטי ומעשי בתחומי המדע, ההנדסה והמתמטיקה. הילדים עושים שימוש בערכות פעילות ייחודיות, באמצעותם הם בונים דגמים שונים ומרגשים, אשר ממחישים להם את העקרונות הנלמדים בשיעור.

הילדים לומדים באופן חוויתי ועצמאי באמצעות שימוש במשחק והתבוננות באופן הפעולה של הדגמים, השיעורים מלווים באתגרים ומשימות המעודדות את הילדים לחשוב בצורה ממציאנית תוך שימוש בדמיון.

התוכנית משתמשת במודל הלמידה הספירלית, אשר מאפשרת לתלמידים ללמוד נושא כל שהוא ולפגוש אותו ברמה עמוקה ומפורטת יותר בהמשך.

התוכנית דומה לתוכנית "גאון של אמא" ומותאמת במבנה שלה לסביבה הבית ספרית.`}
      />
      <PlansBody
        programHeader="תכנית מהנדסי הדור הבא"
        progrmHeaderDes1="בית ספר: כיתות ג'-ה'"
        progrmHeaderDes2="45 דקות שיעור"
        programImage={secondgradesbackground}
        programLogo={firstgradeslogo}
        colorPDes="#3BC402" // green
        programDes={`התוכנית מתאימה לילדי בית ספר יסודי בכיתות א'-ב'. במהלך התוכנית מקבלים הילדים ידע תאורטי ומעשי בתחומי המדע, ההנדסה והמתמטיקה. הילדים עושים שימוש בערכות פעילות ייחודיות, באמצעותם הם בונים דגמים שונים ומרגשים, אשר ממחישים להם את העקרונות הנלמדים בשיעור.

הילדים לומדים באופן חוויתי ועצמאי באמצעות שימוש במשחק והתבוננות באופן הפעולה של הדגמים, השיעורים מלווים באתגרים ומשימות המעודדות את הילדים לחשוב בצורה ממציאנית תוך שימוש בדמיון.

התוכנית משתמשת במודל הלמידה הספירלית, אשר מאפשרת לתלמידים ללמוד נושא כל שהוא ולפגוש אותו ברמה עמוקה ומפורטת יותר בהמשך.

התוכנית דומה לתוכנית "גאון של אמא" ומותאמת במבנה שלה לסביבה הבית ספרית.`}
      />
      <ContactUsFooter />
    </>
  );
};

export default Plans;
