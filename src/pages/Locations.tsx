import { Heading, Box, Select, Text, TagLabel } from "@chakra-ui/react";
import React, { useState } from "react";

interface Location {
  id: number;
  locationName: string;
  name: string;
  mail: string;
}

const Locations = () => {
  const locations: Location[] = [
    {
      id: 1,
      locationName: "נהריה",
      name: "עינבל ברנשטיין",
      mail: "nextengi.galilm@gmail.com",
    },
    {
      id: 2,
      locationName: "מזרח ירושלים",
      name: "ליאור דשקוטאי",
      mail: "nextengi.galilm@gmail.com",
    },
    {
      id: 3,
      locationName: "צפון ירושלים",
      name: "Isam & Mhadi Tamimi",
      mail: "mahdi.decart@gmail.com",
    },
  ];

  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const location = locations.find(
      (location) => location.locationName === selectedValue
    );
    setSelectedLocation(location || null);
  };

  return (
    <>
      <Box display="flex" alignItems="center" flexDirection="column">
        <Box maxW="1000px">
          <Heading css={{ direction: "rtl" }} mb={20}>
            <Box as="span" color="#3AB9FF">
              מהנדסי
            </Box>{" "}
            <Box as="span" color="#FF0004">
              הדור הבא
            </Box>{" "}
            <Box as="span" color="#3BC402">
              מיקומים
            </Box>
          </Heading>
          <Box textAlign="right">
            <label htmlFor="selector">
              <Text color="gray">*בחר מיקום</Text>
            </label>
            <Select
              id="selector"
              placeholder="בחר סניף"
              onChange={handleChange}
              mb={10}
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
              <Text mb={5}>שם: {selectedLocation.name}</Text>
              <Text mb={5}>מייל: {selectedLocation.mail}</Text>
            </Box>
          )}
        </Box>
      </Box>
    </>
  );
};

export default Locations;
