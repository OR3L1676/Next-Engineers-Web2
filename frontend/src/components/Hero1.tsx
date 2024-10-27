import { Box, Button, Heading, Text, Image, VStack } from "@chakra-ui/react";
import logo from "../assets/logos/RGB לדיגיטל - לוגו פרוס בעברית חתוך-01.png";
const Hero1 = () => {
  return (
    <>
      <Box
        bg="gray.100"
        color="black"
        textAlign="right"
        px={20}
        py={10}
        display="flex"
        justifyContent="right"
      >
        <VStack align="end">
          <Image src={logo} width={"400px"}></Image>
          <Text fontSize="xl" mb={8} pr="10px">
            משהו משהו משהו משהו משהו משהו משהו משהו משהו משהו משהו משהו משהו
            משהו משהו
          </Text>
        </VStack>
      </Box>
    </>
  );
};

export default Hero1;
