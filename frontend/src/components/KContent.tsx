import { Box, Text, useBreakpointValue } from '@chakra-ui/react';
import VideoFrame from './VideoFrame';

interface Props {
  backgroundInput: 'blue' | 'white'
}

const KContent = ({backgroundInput}:Props) => {
  const video1 = "https://www.youtube.com/embed/0AJAgzRWB3s";
  const video2 = "https://www.youtube.com/embed/06lVFgw1diU";
  const video3 = "https://www.youtube.com/embed/a_JLD2kPSqQ";
  const video4 = "https://www.youtube.com/embed/3aS2mBjXTDs";
  const video5 = "https://www.youtube.com/embed/grI7zEaBnFc";
  const video6 = "https://www.youtube.com/embed/_uHt3-zBlug";
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
    
    </>
  );
};

export default KContent;
