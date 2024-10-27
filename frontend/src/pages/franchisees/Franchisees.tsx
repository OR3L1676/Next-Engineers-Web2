import { Box, useBreakpointValue } from "@chakra-ui/react";
import FranchiseeOpeningVideo from "./FranchiseeOpeningVideo";
import FranchiseeInventation from "./FranchiseeInventation";
import FranchiseeModel from "./FranchiseeModel";
import FranchiseeAdvantages from "./FranchiseeAdvantages";
import FranchiseeTable from "./FranchiseeTable";
import ContactUsFooter from "../../components/ContactUsFooter";

const Franchisees = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  return (
    <>
      <Box pt={isLargeScreen ? "100px" : "80px"}>
        <FranchiseeOpeningVideo />
      </Box>
      <Box
        display="flex"
        flexDirection={isLargeScreen ? "row" : "column-reverse"}
        justifyContent="center"
      >
        <FranchiseeInventation />
      </Box>
      <FranchiseeModel />
      <FranchiseeAdvantages />
      <FranchiseeTable />
      <ContactUsFooter />
    </>
  );
};

export default Franchisees;
