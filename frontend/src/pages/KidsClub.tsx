import { Box, Heading, useBreakpointValue } from "@chakra-ui/react";
import React, { useState } from "react";
import KContainer from "../components/KContainer";
import KContent from "../components/KContent";

const KidsClub = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });

  return (
    <>
      <Box pt={isLargeScreen ? "100px" : "80px"}>
        <KContainer backgroundInput="blue" heading="ממציאים בריבוע">
          <KContent backgroundInput="blue" isVideo={true}/>
        </KContainer>
        <KContainer backgroundInput="white" heading="הוראות הרכבה לדגמים">
          <KContent backgroundInput="white" isModel={true}/>
        </KContainer>
        <KContainer backgroundInput="blue" heading="Super Steam - קומיקס">
          <KContent backgroundInput="blue" isComics={true}/>
        </KContainer>
      </Box>
    </>
  );
};

export default KidsClub;
