import { Box } from "@chakra-ui/react";
import video from "../assets/couldbegood/HEB_short_final_1.mp4";
import { useRef, useEffect } from "react";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

const HeroVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const backgroundColor = "#3AB9FF";

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0.5;
    }
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      bg="gray.200"
      background={`linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`}
      backgroundBlendMode="overlay"
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
    >
      <Box
        overflow="hidden"
        w={{ lg: "65%", md: "75%", base: "100%" }}
        py={{ lg: "85px", md: "50px", base: "0px" }}
        borderRadius={{ lg: "20px", md: "20px", sm: "0px" }}
      >
        <video
          ref={videoRef}
          src={video}
          controls
          title="explain about the company"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeroVideo;
