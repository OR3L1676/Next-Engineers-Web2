import { Box } from "@chakra-ui/react";
import video from "../assets/couldbegood/HEB_short_final_1.mp4";
import { useRef, useEffect } from "react";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";

interface Props {
  noBackground?: boolean;
}

const HeroVideo = ({ noBackground }: Props) => {
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
      bg={noBackground ? "" : "gray.200"}
      background={
        noBackground
          ? ""
          : `linear-gradient(${backgroundColor}, ${backgroundColor}), url(${pattern})`
      }
      backgroundBlendMode={noBackground ? "" : "overlay"}
      backgroundPosition={noBackground ? "" : "center"}
      backgroundSize={noBackground ? "" : "contain"}
      backgroundRepeat={noBackground ? "" : "repeat"}
    >
      <Box
        overflow="hidden"
        w={{ lg: "65%", md: "75%", base: "100%" }}
        my={{ lg: "85px", md: "50px", base: "0px" }}
        borderRadius={{ lg: "20px", md: "20px", sm: "0px" }}
        boxShadow="rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px" // Apply the box shadow here
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
