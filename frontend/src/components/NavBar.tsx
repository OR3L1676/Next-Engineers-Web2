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
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import logo from "../assets/logos/RGB לדיגיטל - לוגו פרוס בעברית-01.png";
import { Link as RoutLink } from "react-router-dom";
import LoginButton from "./Login";
import KidsClubModal from "./KidsClubModal";

interface Props {
  onConnectedKidClub: (isConnectedKidClub: Boolean) => void;
}

const Navbar = ({ onConnectedKidClub }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);
  const [isConnectUser, setIsConnectedUser] = useState<Boolean>();
  const [isConnectKidsClub, setIsConnectKidsClub] = useState(false);
  const [isMOpen, setIsMOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    const userConnected = localStorage.getItem("accessToken");
    const kidsClubAccess = localStorage.getItem("kidsClubAccess");

    if (userConnected) {
      setIsConnectedUser(true);
    } else {
      setIsConnectedUser(false);
    }

    if (kidsClubAccess) {
      setIsConnectKidsClub(true);
    } else {
      setIsConnectKidsClub(false);
    }
    onConnectedKidClub(isConnectKidsClub);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isConnectKidsClub, isConnectUser]);

  return (
    <Box
      bg="gray.100"
      px={4}
      py={5}
      position="fixed"
      top={0}
      width="100%"
      zIndex={10}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <HStack alignItems="center">
          <LoginButton
            onConnectedUser={(connected) => setIsConnectedUser(connected)}
          />
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
          {isConnectUser && (
            <Box>
              <Button
                _hover={{ bg: "rgba(245, 39, 39, 0.65)", color: "white" }}
                variant="ghost"
                color="rgb(245, 39, 39)"
                fontSize={17}
                as={isConnectKidsClub ? RoutLink : undefined} // Conditionally link only if connected to Kids Club
                to={isConnectKidsClub ? "KidsClub" : undefined} // Navigate only if connected to Kids Club
                onClick={() => {
                  if (!isConnectKidsClub) setIsMOpen(true);
                }}
              >
                מועדון הילדים
              </Button>
              <KidsClubModal
                isOpen={isMOpen}
                onClose={() => setIsMOpen(false)}
                onConnectedUser={() => setIsConnectKidsClub(true)}
              />
            </Box>
          )}

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

      <Collapse in={isOpen} endingHeight="230px" animateOpacity>
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
              <ListItem>
                <Link
                  borderBottom="1px solid grey"
                  display="block"
                  _hover={{ textDecoration: "none" }}
                  as={isConnectKidsClub ? RoutLink : undefined} // Conditionally link only if connected to Kids Club
                  to={isConnectKidsClub ? "KidsClub" : undefined} // Navigate only if connected to Kids Club
                  onClick={() => {
                    if (!isConnectKidsClub) setIsMOpen(true);
                  }}
                >
                  מועדון הילדים
                </Link>
                <KidsClubModal
                  isOpen={isMOpen}
                  onClose={() => setIsMOpen(false)}
                  onConnectedUser={() => setIsConnectKidsClub(true)}
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Navbar;
