import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

interface Props {
  heading: string;
  body: string;
  image: string;
  color: string;
}

const MCard = ({ heading, body, image, color }: Props) => {
  return (
    <>
      <Card
        bg={color}
        borderRadius="20px"
        color={color === "#FEDB03" ? "#3AB9FF" : "white"}
        overflow="hidden"
        minH="550px"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"}
      >
        <CardHeader pb={4} p={0} overflow="hidden" borderRadius="20px 20px 0 0">
          <Image w="100%" h="400px" src={image} objectFit="cover" />
        </CardHeader>
        <CardBody w="100%" h="250px" p="0 20px 20px 20px" textAlign="center">
          <Heading fontSize="x-large" mb={4}>
            {heading}
          </Heading>
          <Text
            fontSize={{ lg: "16px", sm: "19px" }}
            dir="rtl"
            textAlign="justify"
          >
            {body}
          </Text>
        </CardBody>
      </Card>
    </>
  );
};

export default MCard;
