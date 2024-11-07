import { Box, useBreakpointValue } from '@chakra-ui/react';

interface Props {
    link: string;
}

const VideoFrame = ({link} : Props) => {
  const iframeWidth = useBreakpointValue({
    base: '100%', 
    sm: '426px',   
    md: '640px',  
    lg: '854px', 
  });

  const iframeHeight = useBreakpointValue({
    base: '243px', 
    sm: '240px',
    md: '360px',
    lg: '480px', 
  });

  return (
    <>

      <iframe
        width={iframeWidth}
        height={iframeHeight}
        src={link}
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>   
    </>
  );
};

export default VideoFrame;
