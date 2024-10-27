import { Grid, GridItem, ChakraProvider, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import CardGrid from "./components/CardGrid";
import HeroVideo from "./components/HeroVideo";
import Plans from "./pages/Plans";
import Locations from "./pages/Locations";
import Hero4 from "./components/Hero4";
import Franchisees from "./pages/franchisees/Franchisees";
import AboutUs from "./pages/AboutUs";
import ContactUsFooter from "./components/ContactUsFooter";
import KidsClub from "./pages/KidsClub";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [isConnectKidsClub, setIsConnectKidsClub] = useState<Boolean>(Boolean);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease",
      once: false,
    });
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Grid fontFamily="sans-serif" templateAreas={`"nav" "main" "footer"`}>
          <GridItem area={"nav"}>
            <Navbar
              onConnectedKidClub={(isConnectKidsClub: Boolean) => {
                setIsConnectKidsClub(isConnectKidsClub);
              }}
            />
          </GridItem>
          <GridItem area={"main"}>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Hero2 />
                    <Hero3 />
                    <CardGrid />
                    <Hero4 />
                    <HeroVideo />
                    <ContactUsFooter />
                  </>
                }
              />
              <Route path="/Plans" element={<Plans />} />
              <Route path="/Locations" element={<Locations />} />
              <Route path="/Franchisees" element={<Franchisees />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route
                path="/KidsClub"
                element={
                  <PrivateRoute isAllowed={isConnectKidsClub}>
                    <KidsClub />
                  </PrivateRoute>
                }
              />
            </Routes>
          </GridItem>
          <GridItem area={"footer"}></GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  );
};

export default App;
