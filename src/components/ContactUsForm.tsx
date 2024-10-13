import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Icon,
  Input,
  Link,
  Textarea,
} from "@chakra-ui/react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FieldValues, useForm } from "react-hook-form";
import axios from "axios";

const ContactUsForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: FieldValues) => {
    try {
      await axios.post("http://localhost:3000/send-email", data);
      alert("Email sent successfully!");
    } catch (error) {
      console.error("Error sending email", error);
      alert("Failed to send email.");
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl bg="#3AB9FF" maxW="500px" p={10} borderRadius={15}>
          <HStack mb={"50px"}>
            <Box>
              <FormLabel fontSize="larger" color="#FEDB03" textAlign="right">
                שם פרטי
              </FormLabel>
              <Input
                border="0px solid"
                bg="rgba(255, 255, 255, 0.5)"
                textAlign="right"
                type="text"
                {...register("firstName")}
              />
            </Box>
            <Box>
              <FormLabel fontSize="larger" color="#FEDB03" textAlign="right">
                שם משפחה
              </FormLabel>
              <Input
                border="0px solid"
                bg="rgba(255, 255, 255, 0.5)"
                textAlign="right"
                type="text"
                {...register("lastName")}
              />
            </Box>
          </HStack>
          <HStack mb={"50px"}>
            <Box>
              <FormLabel fontSize="larger" color="#FEDB03" textAlign="right">
                * אימייל
              </FormLabel>
              <Input
                border="0px solid"
                bg="rgba(255, 255, 255, 0.5)"
                textAlign="right"
                type="email"
                required
                {...register("email")}
              />
            </Box>
            <Box>
              <FormLabel fontSize="larger" color="#FEDB03" textAlign="right">
                * טלפון
              </FormLabel>
              <Input
                border="0px solid"
                bg="rgba(255, 255, 255, 0.5)"
                textAlign="right"
                type="number"
                required
                {...register("phoneNumber")}
              />
            </Box>
          </HStack>
          <Box mb="50px">
            <FormLabel fontSize="larger" color="#FEDB03" textAlign="right">
              כתובת
            </FormLabel>
            <Input
              border="0px solid"
              bg="rgba(255, 255, 255, 0.5)"
              textAlign="right"
              type="text"
              {...register("message")}
            />
          </Box>
          <Box mb="50px">
            <FormLabel fontSize="larger" color="#FEDB03" textAlign="right">
              השאר הודעה
            </FormLabel>

            <Textarea
              border="0px solid"
              bg="rgba(255, 255, 255, 0.5)"
              textAlign="right"
              {...register("message")}
            />
          </Box>

          <HStack spacing={4} mb="50px" justifyContent="center">
            <Link
              href="https://www.facebook.com/Next.Engineers.group/"
              isExternal
              _hover={{ transform: "scale(1.5)" }}
              transition="transform 0.2s ease-in-out"
            >
              <Icon as={FaFacebook} w={8} h={8} />
            </Link>
            <Link
              href="https://www.instagram.com/next_engineers_group/"
              isExternal
              _hover={{ transform: "scale(1.5)" }}
              transition="transform 0.2s ease-in-out"
            >
              <Icon as={FaInstagram} w={8} h={8} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nextengineersltd/"
              isExternal
              _hover={{ transform: "scale(1.5)" }}
              transition="transform 0.2s ease-in-out"
            >
              <Icon as={FaLinkedin} w={8} h={8} />
            </Link>
            <Link
              href="https://www.youtube.com/@next_engineers"
              isExternal
              _hover={{ transform: "scale(1.5)" }}
              transition="transform 0.2s ease-in-out"
            >
              <Icon as={FaYoutube} w={8} h={8} />
            </Link>
            <Link
              href="https://www.tiktok.com/@next_engineers"
              isExternal
              _hover={{ transform: "scale(1.5)" }}
              transition="transform 0.2s ease-in-out"
            >
              <Icon as={FaTiktok} w={8} h={8}></Icon>
            </Link>
          </HStack>

          <Box textAlign="center">
            <Button colorScheme="yellow" type="submit">
              שלח
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default ContactUsForm;
