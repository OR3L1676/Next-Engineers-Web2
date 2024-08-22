import { Box, Grid, GridItem, ChakraProvider, Button } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Navbar from "./components/NavBar";
import Hero1 from "./components/Hero1";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import CardGrid from "./components/CardGrid";
import HeroVideo from "./components/HeroVideo";
import { Link } from "react-router-dom";
import MothersGenius from "./pages/MothersGenius";
import CrazyInventors from "./pages/CrazyInventors";
import InventorSquared from "./pages/InventorSquared";
import FirstGrades from "./pages/FirstGrades";
import SecondGrades from "./pages/SecondGrades";
import Robologie from "./pages/Robologie";
import Plans from "./pages/Plans";
import Locations from "./pages/Locations";
import Hero4 from "./components/Hero4";
import Franchisees from "./pages/franchisees/Franchisees";

const App = () => {
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
            <Navbar />
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
                  </>
                }
              />
              <Route path="/Plans" element={<Plans />} />
              <Route path="/MothersGenius" element={<MothersGenius />} />
              <Route path="/Locations" element={<Locations />} />
              <Route path="/Franchisees" element={<Franchisees />} />
              {/*<Route path="/CrazyInventors" element={<CrazyInventors />} />
              <Route path="/InventorSquared" element={<InventorSquared />} />
              <Route path="/FirstGrades" element={<FirstGrades />} />
              <Route path="/SecondGrades" element={<SecondGrades />} />
              <Route path="/Robologie" element={<Robologie />} /> */}
            </Routes>
          </GridItem>
          <GridItem area={"footer"}></GridItem>
        </Grid>
      </Router>
    </ChakraProvider>
  );
};

export default App;
