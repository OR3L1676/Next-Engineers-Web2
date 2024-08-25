import {
  Box,
  Text,
  Heading,
  Table,
  Tr,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import React from "react";

interface Props {
  number: number;
  heading: string;
  body: string;
}

const Acard = ({ number, heading, body }: Props) => {
  return (
    <TableContainer maxW="510px" m={1}>
      <Table css={{ direction: "rtl" }} borderBottom="3px solid #1D67CD">
        <Tr>
          <Td borderBottom="none">
            <Heading fontSize="60px" color="#1D67CD">
              0{number}
            </Heading>
          </Td>
          <Td whiteSpace="pre-line" wordBreak="break-word" borderBottom="none">
            <Heading color="white">{heading}</Heading>
          </Td>
        </Tr>
        <Tr>
          <Td borderBottom="none"></Td>
          <Td
            borderBottom="none" // You can keep this for the specific cell
            whiteSpace="pre-line"
            wordBreak="break-word"
            pt={0}
          >
            <Text fontSize="18px" textAlign="justify">
              {body}
            </Text>
          </Td>
        </Tr>
      </Table>
    </TableContainer>
  );
};

export default Acard;
