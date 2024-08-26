import { ChevronDownIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  List,
  ListItem,
  Image,
  Collapse,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "../assets/logos/RGB לדיגיטל - לוגו פרוס בעברית-01.png";
import { Link as RoutLink } from "react-router-dom";
import LoginButton from "./Login";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      bg="gray.100"
      px={4}
      py={5}
      position={isSticky ? "fixed" : "fixed"}
      top={0}
      width="100%"
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <LoginButton />
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
            as={RoutLink}
            to="AboutUs"
          >
            קצת עלינו
          </Button>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
            as={RoutLink}
            to="Locations"
          >
            סניפים
          </Button>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
            as={RoutLink}
            to="Franchisees"
          >
            זכיינים
          </Button>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
            as={RoutLink}
            to="Plans"
          >
            תוכניות
          </Button>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
            as={RoutLink}
            to="/"
          >
            בית
          </Button>
          <Image src={logo} width={"220px"} />
        </HStack>
      </Flex>

      <Collapse in={isOpen} endingHeight="190px" animateOpacity>
        <Box pb={4} display={{ md: "none" }} textAlign="end">
          <Box ml="auto">
            <List as="nav" spacing={4}>
              <ListItem>
                <Link
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  as={RoutLink}
                  to="/"
                >
                  בית
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  as={RoutLink}
                  to="/Plans"
                >
                  תוכניות
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  as={RoutLink}
                  to="/Locations"
                >
                  סניפים
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  as={RoutLink}
                  to="/Franchisees"
                >
                  זכיינים
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  as={RoutLink}
                  to="AboutUs"
                >
                  קצת עלינו
                </Link>
              </ListItem>
            </List>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
