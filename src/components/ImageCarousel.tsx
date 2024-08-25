import { useState, useRef, useEffect } from "react";
import {
  Box,
  IconButton,
  Image,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Props {
  images: string[];
}

const ImageCarousel = ({ images }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(0);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const totalImages = images.length;

  useEffect(() => {
    if (imageRef.current) {
      setImageWidth(imageRef.current.clientWidth);
    }
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % totalImages);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + totalImages) % totalImages);
  };

  const arrowSize = useBreakpointValue({ base: "sm", md: "md" });

  return (
    <Box position="relative" maxW={"400px"} overflow="hidden">
      <IconButton
        icon={<FaArrowLeft />}
        onClick={prevSlide}
        position="absolute"
        left="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        size={arrowSize}
        aria-label="Previous Slide"
      />

      <Flex
        transition="transform 0.5s ease"
        transform={`translateX(-${currentIndex * imageWidth}px)`}
      >
        {images.map((image, index) => (
          <Box key={index} flex="none" width="100%">
            <Image
              ref={index === currentIndex ? imageRef : null}
              src={image}
              alt={`Slide ${index}`}
              width="100%"
              height="auto"
            />
          </Box>
        ))}
      </Flex>

      <IconButton
        icon={<FaArrowRight />}
        onClick={nextSlide}
        position="absolute"
        right="10px"
        top="50%"
        transform="translateY(-50%)"
        zIndex="1"
        size={arrowSize}
        aria-label="Next Slide"
      />
    </Box>
  );
};

export default ImageCarousel;
