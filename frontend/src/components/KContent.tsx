import { Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react';
import VideoFrame from './VideoFrame';
import ModelFrame from './ModelFrame';
import ComicsFrame from './ComicsFrame';
import footBall1 from "../assets/kidsclub-src/כדורגל 4צ  - 6051-1.jpg"
import footBall2 from "../assets/kidsclub-src/כדורגל 4צ  - 6051-2.jpg"
import footBall3 from "../assets/kidsclub-src/כדורגל 4צ  - 6051-3.jpg"
import footBall4 from "../assets/kidsclub-src/כדורגל 4צ  - 6051-4.jpg"
import patiphon1 from "../assets/kidsclub-src/פטיפון 4צ - 6050-1.jpg"
import patiphon2 from "../assets/kidsclub-src/פטיפון 4צ - 6050-2.jpg"
import patiphon3 from "../assets/kidsclub-src/פטיפון 4צ - 6050-3.jpg"
import patiphon4 from "../assets/kidsclub-src/פטיפון 4צ - 6050-4.jpg"
import pirate1 from "../assets/kidsclub-src/הפל את הפיראט -  6020-1 cmyk 80.jpg"
import pirate2 from "../assets/kidsclub-src/הפל את הפיראט - 6020-2 cmyk 80.jpg"
import pirate3 from "../assets/kidsclub-src/הפל את הפיראט - 6020-3.jpg"
import pirate4 from "../assets/kidsclub-src/הפל את הפיראט - cmyk 80  6020-4.jpg"
import comics2 from "../assets/kidsclub-src/comics1.jpg"
import comics1 from "../assets/kidsclub-src/comics2.jpg"
import comics3 from "../assets/kidsclub-src/comics3.jpg"
interface Props {
  backgroundInput: 'blue' | 'white' | "red" | "green"
  isVideo?: boolean,
  isModel?: boolean,
  isComics?: boolean,
}


const KContent = ({backgroundInput, isVideo, isModel, isComics}:Props) => {
  const isLargeScreen = useBreakpointValue({base: false ,sm: true, md: true})
  
  const video1 = "https://www.youtube.com/embed/0AJAgzRWB3s";
  const video2 = "https://www.youtube.com/embed/06lVFgw1diU";
  const video3 = "https://www.youtube.com/embed/a_JLD2kPSqQ";
  const video4 = "https://www.youtube.com/embed/3aS2mBjXTDs";
  const video5 = "https://www.youtube.com/embed/grI7zEaBnFc";
  const video6 = "https://www.youtube.com/embed/_uHt3-zBlug";

  const fontSizeText = isLargeScreen ? "30px" : "19px";

  const text1 = `<span style="font-size: ${fontSizeText}; font-weight: bold;"> פרק 1 - ממציאים בריבוע - קסם מגנוס </span> 

  בפרק זה אביגיל ומרינל לומדות מהי בעיטת בננה, ואיך היא קשורה בכלל לאפקט פיזיקאלי שנקרא אפקט מגנוס? 
  
  לסיום הם מלמדות אותנו לייצר כוס מעופפת מדליקה שמיישמת את העקרון של אפקט מגנוס.`
  
  const text2 = `<span style="font-size: ${fontSizeText}; font-weight: bold;"> פרק 2 - ממציאים בריבוע - סודות האנימציה </span> 

בפרק זה נלמד על  אנימציה,  אשליה חושית, והמשכיות הראייה,  ומה הקשר ביניהם.

אביגיל ומרינל ילמדו אותנו כיצד לייצר מחומרים פשוטים שיש בבית, מכשיר מדליק שנקרא : תאומפטרופ, באמצעותו ניצור אנימציות פשוטות.`
  
  const text3 = `<span style="font-size: ${fontSizeText}; font-weight: bold;"> פרק 3 - ממציאים בריבוע - סוד ההתמדה </span>

בפרק זה מרינל ואביגיל ונעמה לומדות על חוק ההתמדה, שהוא למעשה החוק ה 1 של ניוטון.

בנוסף הם מבצעות מספר ניסויים מדליקים הקשורים לחוק ההתמדה.`
  
  const text4 = `<span style="font-size: ${fontSizeText}; font-weight: bold;"> פרק 4 - ממציאים בריבוע - נפלאות הכוח הסיבובי </span>  

בפרק זה אנו מארחים את פזית הבובה, אשר לומדת על כוח סיבובי מיוחד שנוצר בזמן סיבוב של חפצים - הכוח הצנטריפוגלי.

בהמשך אנו עורכים ניסוי מיוחד ומגלים כיצד ניתן לסובב במעגלים, כוס מלאה מים הקשורה לחוט, מבלי שהמים ישפכו.`
  
  const text5 = `<span style="font-size: ${fontSizeText}; font-weight: bold;"> פרק 5 - ממציאים בריבוע - סודות התאוצה </span>  

בפרק זה נלמד על  החוק השני של ניוטון. מה הקשר בין הכוח המופעל על הגוף, המסה שלו והתאוצה שלו. 

מרינל ונעמה יערכו ניסוי פשוט מדליק, אשר ימחיש לנו את החוק השני של ניוטון.
אתם מוזמנים לבצע אותו בבית.`
  const text6 = `<span style="font-size: ${fontSizeText}; font-weight: bold;"> פרק 6 - ממציאים בריבוע - סוד הפעולה והתגובה </span>  

בפרק זה נלמד על החוק השלישי של ניוטון. נבין מדוע אוויר המשוחרר מבלון מנופח גורם לבלון להתעופף בכיוון ההפוך לכיוון יציאת האוויר ? 

מרינל ונעמה יערכו ניסוי פשוט מדליק של רכבל בלון, אשר ימחיש לנו את החוק השלישי של ניוטון. אתם מוזמנים לבצע אותו בבית.`
  
  const Videos = [
    {items: [video1, video2, video3, video4, video5, video6], text: [text1, text2, text3, text4, text5, text6]}
  ]
  const Models = [
    {
      items: [footBall1, footBall2, footBall3, footBall4],
      category: "football",
      text: "דגם - כדורגל"
    },
    {
      items: [patiphon1, patiphon2, patiphon3, patiphon4],
      category: "patiphon",
      text: "דגם - פטיפון"
    },
    {
      items: [pirate1, pirate2, pirate3, pirate4],
      category: "pirate",
      text: "דגם - הפל את הפיראט"
    }
  ];

  const Comics = [
    { 
      items: [comics1, comics2, comics3], 
      category: "1",
      text: "פרק 1" 
    },
  ];

  const customBorder = {
    borderTop: "10px solid #FF5454",
    borderRight: "10px solid #FEDB03",
    borderBottom: "10px solid #45D82F",
    borderLeft: "10px solid royalblue",
  };  
  
  return (
    <>
    <Box color={backgroundInput === 'blue' ? "white" : "black"} fontSize={{sm: "15px", md: "20px"}}>
    
    {isVideo ? 
     <Box>
      {Videos[0].items.map((video, index)=> (
        <Box key={index} display="flex" flexDirection="column" css={{ direction: "rtl" }}>
          <Box display="inherit" justifyContent="right">
            <Text fontSize={isLargeScreen ? "" : "12px"} color="white" whiteSpace="pre-line" css={{ direction: "rtl" }} textAlign={isLargeScreen ? "justify" : "right"} maxW={{md: "100%", lg: "50vw"}} px={isLargeScreen ? 0 : "20px"} mb={8} dangerouslySetInnerHTML={{ __html: Videos[0].text[index] }}></Text>
          </Box>
          <Box mb="75px" borderRadius={20} overflow="hidden" style={customBorder}>
            <VideoFrame link={video}/>
          </Box>
        </Box>
      ))}

     
    </Box>
     : isModel ? 
     <Box display="flex" flexDir="column">
      {Models.map((model, index)=> (
      <Box key={index}>
          <Box mb={10}>
            <Heading fontSize={fontSizeText} color="white" textAlign="right">{model.text}</Heading>
          </Box>
          <Box borderRadius={20} mb="100px" overflow="hidden" style={customBorder}>
            <ModelFrame model={model.items}/>
          </Box>
      </Box>
      ))}
     </Box>
     : isComics ?
     <Box display="flex" flexDir="column">  
     {Comics.map((comics, index)=> (
      <Box key={index}>
          <Box mb={10}>
            <Heading color="white" textAlign="right">{comics.text}</Heading>
          </Box>
          <Box borderRadius={20} mb="100px" overflow="hidden" style={customBorder}>
            <ComicsFrame comics={comics.items}/>
          </Box>   
    </Box>
    
      ))}
     </Box>
     : ""}
    </Box>
    
    </>
  );
};

export default KContent;
