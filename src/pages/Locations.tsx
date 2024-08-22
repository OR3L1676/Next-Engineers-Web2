import React, { useState } from "react";
import {
  Heading,
  Box,
  Select,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import pattern from "../assets/couldbegood/03355b_ccff82c916294d3e83a8d81437ae7f3e~mv2.png";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import locationsImport from "../services/locations";

interface Location {
  id: number;
  locationName?: string;
  name?: string;
  mail?: string;
  lat: number;
  lng: number;
}

const Locations = () => {
  const isLargeScreen = useBreakpointValue({ base: false, md: true });
  const locations: Location[] = locationsImport;

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );
  const baseLocation = {
    id: -1,
    lat: 31.5,
    lng: 34.8516,
  };
  const [center, setCenter] = useState({ lat: 31.5, lng: 34.8516 }); // Default center in Israel
  const [zoom, setZoom] = useState(7);
  const googleMapApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const location = locations.find(
      (location) => location.locationName === selectedValue
    );
    if (location) {
      setSelectedLocation(location);
      setCenter({ lat: location.lat, lng: location.lng });
      setZoom(15);
    } else {
      setSelectedLocation(baseLocation);
      setCenter({ lat: baseLocation.lat, lng: baseLocation.lng });
      setZoom(7);
    }
  };

  return (
    <Box
      h="100vh"
      display="flex"
      alignItems="center"
      flexDirection="column"
      pt={isLargeScreen ? "140px" : "100px"}
      backgroundImage={`url(${pattern})`}
      backgroundPosition="center"
      backgroundSize="contain"
      backgroundRepeat="repeat"
      backgroundColor="gray.200"
    >
      <Box
        mt={isLargeScreen ? "110px" : 0}
        maxW="1000px"
        padding={{ lg: "50px 70px 50px 70px", base: "40px" }}
        border="white solid 1px"
        borderRadius={isLargeScreen ? "20px" : 0}
        backgroundColor="gray.100"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 30px 90px;"
        display="flex"
        flexDirection={{ base: "column-reverse", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
      >
        <Box
          borderRadius={isLargeScreen ? "10px" : 0}
          minH={isLargeScreen ? "430px" : ""}
          overflow="hidden"
          mt={isLargeScreen ? "0" : "40px"}
          mr={{ md: "80px", base: "0" }}
          mb={{ base: "30px", md: "0" }}
        >
          <LoadScript googleMapsApiKey={googleMapApiKey}>
            <GoogleMap
              mapContainerStyle={{
                width: "400px",
                height: "400px",
              }}
              center={center}
              zoom={zoom}
            >
              {locations.map((location) => (
                <Marker
                  key={location.id}
                  position={{ lat: location.lat, lng: location.lng }}
                  title={location.locationName}
                />
              ))}
            </GoogleMap>
          </LoadScript>
        </Box>
        <Box flex="1">
          <Heading
            fontSize="xxx-large"
            css={{ direction: "rtl" }}
            mb="30px"
            pb="30px"
            borderBottom="black dashed 5px"
          >
            <Box as="span" color="#3BC402">
              מיקומי{" "}
            </Box>
            <Box as="span" color="#3AB9FF">
              מהנדסי
            </Box>{" "}
            <Box as="span" color="#FF0004">
              הדור הבא
            </Box>{" "}
          </Heading>
          <Box
            textAlign="right"
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
          >
            <label htmlFor="selector">
              <Text color="gray">*בחר מיקום</Text>
            </label>
            <Select
              id="selector"
              placeholder="בחר סניף"
              onChange={handleChange}
              mb={2}
              w="300px"
            >
              {locations.map((location) => (
                <option key={location.id} value={location.locationName}>
                  {location.locationName}
                </option>
              ))}
            </Select>
          </Box>

          {selectedLocation && (
            <Box textAlign="right" css={{ direction: "rtl" }} mt={4}>
              <Text fontSize="30px" mb={5} fontWeight="bold">
                {selectedLocation.locationName}
              </Text>
              <Text mb={5}>
                {selectedLocation.name === undefined
                  ? ""
                  : "שם: " + selectedLocation.name}
              </Text>
              <Text mb={5}>
                {selectedLocation.mail == undefined
                  ? ""
                  : "מייל: " + selectedLocation.mail}
              </Text>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Locations;
