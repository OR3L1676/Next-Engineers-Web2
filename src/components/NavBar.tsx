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
  color,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "../assets/logos/RGB לדיגיטל - לוגו פרוס בעברית-01.png";
import { Link as RoutLink } from "react-router-dom";

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
      position={isSticky ? "fixed" : "static"}
      top={0}
      width="100%"
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <Button variant="outline" colorScheme="red" size="sm">
            הירשם
          </Button>
          <Button
            backgroundColor="#3AB9FF"
            color="white"
            _hover={{ backgroundColor: "skyblue" }}
            size="sm"
            mr={4}
          >
            התחבר
          </Button>
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
          >
            קצת עלינו
          </Button>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
          >
            תקשורת
          </Button>
          <Button
            _hover={{ bg: "skyblue", color: "white" }}
            variant="ghost"
            color="#3AB9FF"
            fontSize={17}
          >
            תוכניות
          </Button>
          /-------------
          <Menu>
            <MenuButton
              color="#3AB9FF"
              _hover={{ bg: "skyblue", color: "white" }}
              as={Button}
            >
              תוכניות
            </MenuButton>
            <MenuList color="#3AB9FF" fontSize={17} textAlign="justify">
              <MenuItem
                justifyContent={"center"}
                as={RoutLink}
                to="MothersGenius"
              >
                גאון של אמא
              </MenuItem>
              <MenuItem
                justifyContent={"center"}
                as={RoutLink}
                to="CrazyInventors"
              >
                ממציאים משוגעים
              </MenuItem>
              <MenuItem
                justifyContent={"center"}
                as={RoutLink}
                to="InventorSquared"
              >
                ממציאים בריבוע
              </MenuItem>
              <MenuItem
                justifyContent={"center"}
                as={RoutLink}
                to="FirstGrades"
              >
                'מהנדסי הדור הבא - כיתות א'-ב
              </MenuItem>
              <MenuItem
                justifyContent={"center"}
                as={RoutLink}
                to="SecondGrades"
              >
                'מהנדסי הדור הבא - כיתות ג'-ה
              </MenuItem>
              <MenuItem justifyContent={"center"} as={RoutLink} to="Robologie">
                רובולוגי
              </MenuItem>
            </MenuList>
          </Menu>
          /--------------
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

      <Collapse in={isOpen} endingHeight="150px" animateOpacity>
        <Box pb={4} display={{ md: "none" }} textAlign="end">
          <Box ml="auto">
            <List as="nav" spacing={4}>
              <ListItem>
                <Link
                  href="#"
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                >
                  בית
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                >
                  שירותים
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                >
                  תקשורת
                </Link>
              </ListItem>
              <ListItem>
                <Link
                  href="#"
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
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
