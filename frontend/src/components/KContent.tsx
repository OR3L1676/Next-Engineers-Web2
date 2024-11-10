import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
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
  backgroundInput: 'blue' | 'white'
  isVideo?: boolean,
  isModel?: boolean,
  isComics?: boolean,
}

const KContent = ({backgroundInput, isVideo, isModel, isComics}:Props) => {

  const video1 = "https://www.youtube.com/embed/0AJAgzRWB3s";
  const video2 = "https://www.youtube.com/embed/06lVFgw1diU";
  const video3 = "https://www.youtube.com/embed/a_JLD2kPSqQ";
  const video4 = "https://www.youtube.com/embed/3aS2mBjXTDs";
  const video5 = "https://www.youtube.com/embed/grI7zEaBnFc";
  const video6 = "https://www.youtube.com/embed/_uHt3-zBlug";

  const Models = [
    { items: [footBall1, footBall2, footBall3, footBall4], category: "football" },
    { items: [patiphon1, patiphon2, patiphon3, patiphon4], category: "patiphon" },
    { items: [pirate1, pirate2, pirate3, pirate4], category: "pirate" }
  ];

  const Comics = [
    { items: [comics1, comics2, comics3], category: "1" },
  ];

  const customBorder = {
    borderTop: "5px solid #FF5454",
    borderRight: "5px solid #FEDB03",
    borderBottom: "5px solid #45D82F",
    borderLeft: "5px solid royalblue",
  };  
  const isLargeScreen = useBreakpointValue({base: false ,sm: true, md: true})
  
  return (
    <>
    <Box color={backgroundInput === 'blue' ? "white" : "black"} fontSize={{sm: "15px", md: "20px"}}>
    
    {isVideo ? <Box>
      <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 1 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box mb="75px" borderRadius={20} overflow="hidden" style={customBorder}>
        <VideoFrame link={video1}/>
      </Box>
    </Box>

    <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 2 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box mb="75px" borderRadius={20} overflow="hidden" style={customBorder}>
        <VideoFrame link={video2}/>
      </Box>
    </Box>

    <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 3 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box mb="75px" borderRadius={20} overflow="hidden" style={customBorder}> 
        <VideoFrame link={video3}/>
      </Box>
    </Box>
    
    <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 4 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box mb="75px" borderRadius={20} overflow="hidden" style={customBorder}>
        <VideoFrame link={video4}/>
      </Box>
    </Box>

    <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 5 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box mb="75px" borderRadius={20} overflow="hidden" style={customBorder}>
        <VideoFrame link={video5}/>
      </Box>
    </Box>

    <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 6 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box borderRadius={20} overflow="hidden" style={customBorder}>
        <VideoFrame link={video6}/>
      </Box>
    </Box>
    </Box>
     : isModel ? 
     <Box display="flex" flexDir="column">
      <Box borderRadius={20} mb="100px" overflow="hidden" style={customBorder}>
        <ModelFrame model={Models.filter((model)=> model.category === "football")[0].items}/>
      </Box>
      <Box borderRadius={20} mb="100px" overflow="hidden" style={customBorder}>
        <ModelFrame model={Models.filter((model)=> model.category === "pirate")[0].items}/>
      </Box>
      <Box borderRadius={20} overflow="hidden" style={customBorder}>
        <ModelFrame model={Models.filter((model)=> model.category === "patiphon")[0].items}/>
      </Box>
     </Box>
     : isComics ?
     <Box>     
      <Box display="flex" flexDirection="column" css={{ direction: "rtl" }}>
      <Box display="inherit" justifyContent="right">
        <Text textAlign="justify" maxW={isLargeScreen ? "40vw" : "100%"} px={isLargeScreen ? 0 : "20px"} mb={8}>פרק 6 - תיאור תיאור תיאור תיאור תיאור תיאור תיאור</Text>
      </Box>
      <Box borderRadius={20} overflow="hidden" style={customBorder}>
      <ComicsFrame comics={Comics.filter((comics)=> comics.category === "1")[0].items}></ComicsFrame>
      </Box>
    </Box>
     </Box>

     
     : ""}
    </Box>
    
    </>
  );
};

export default KContent;
