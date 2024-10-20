import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

const KidsClub = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box>
        <Heading pt={isLargeScreen ? "100px" : "80px"}>KIDS CLUB HERE</Heading>
      </Box>
    </>
  );
};

export default KidsClub;
