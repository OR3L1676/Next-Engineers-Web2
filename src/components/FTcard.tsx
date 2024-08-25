import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Collapse,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  image: string;
  heading: string;
  body: string;
  backgroundColor: "red" | "yellow";
}

const FTcard = ({ image, heading, body, backgroundColor }: Props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <>
      <Card
        backgroundColor={backgroundColor === "yellow" ? "#FEDB03" : "red"}
        maxW="400px"
        p={14}
        pt={5}
      >
        <CardHeader display="flex" justifyContent="center">
          <Image src={image} boxSize={20} borderRadius="full" />
        </CardHeader>
        <CardBody pt={0} color={backgroundColor === "red" ? "white" : "black"}>
          <Heading
            fontSize="x-large"
            mx="auto"
            maxW="225px"
            textAlign="center"
            mb={6}
          >
            {heading}
          </Heading>
          <Collapse startingHeight={50} in={show}>
            <Text
              css={{ direction: "rtl" }}
              textAlign="justify"
              maxW="250px"
              mx="auto"
              sx={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: show ? "none" : 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {body}
            </Text>
          </Collapse>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button background={"none"} size="sm" onClick={handleToggle}>
              {show ? "Show Less" : "Show More"}
            </Button>
          </Box>
        </CardBody>
      </Card>
    </>
  );
};

export default FTcard;
