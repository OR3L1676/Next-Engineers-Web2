import { Box, useBreakpointValue } from '@chakra-ui/react';

interface Props {
    link: string;
    sandboxPolicy?: string;
    hasStorageAccess?: boolean;
}

const VideoFrame = ({ link, sandboxPolicy, hasStorageAccess }: Props) => {
  const iframeWidth = useBreakpointValue({
    base: '100%', 
    sm: '100%',   
    md: '100%',  
    lg: '100%', 
  });

  const iframeHeight = useBreakpointValue({
    base: '243px', 
    sm: '240px',
    md: '360px',
    lg: '480px', 
  });

  const getEnhancedUrl = (url: string) => {
    return url.replace('youtube.com', 'youtube-nocookie.com');
  };

  // Create iframe props object to handle optional properties
  const iframeProps: React.IframeHTMLAttributes<HTMLIFrameElement> = {
    width: iframeWidth,
    height: iframeHeight,
    src: getEnhancedUrl(link),
    title: "YouTube video player",
    frameBorder: "0",
    allowFullScreen: true,
    allow: `accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture${hasStorageAccess ? '; storage-access' : ''}`
  };

  // Only add sandbox attribute if sandboxPolicy is provided
  if (sandboxPolicy) {
    iframeProps.sandbox = sandboxPolicy;
  }

  return (
    <Box className="video-container">
      <iframe {...iframeProps} />
    </Box>
  );
};

export default VideoFrame;