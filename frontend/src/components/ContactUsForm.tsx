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
  useToast,
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
import { useState } from "react";

const showToast = (
  toast: any,
  title: string,
  description: string,
  status: "success" | "error"
) => {
  toast({
    title: title,
    description: description,
    status: status,
    duration: 9000,
    isClosable: true,
  });
};

const ContactUsForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const toast = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    data.email = data.email.toLowerCase();
    data.phoneNumber = data.phoneNumber.replace(/-/g, "");
    console.log(data);

    try {
      // Send form data to another API
      await axios.post(`${"https://next-engineers-web2.onrender.com"}/api/forms`, {
        firstName: data.firstName || "",
        lastName: data.lastName || "",
        phone: data.phoneNumber,
        email: data.email,
        address: data.address || "",
        message: data.message || "",
      });

      // Show success toast
      setTimeout(() => {
        showToast(toast, "שליחת טופס", "הפעולה בוצעה בהצלחה", "success");
      }, 300);

      reset(); // Reset the form after successful submission
    } catch (error) {
      console.error("Error sending email or saving form data", error);

      // Show error toast
      setTimeout(() => {
        showToast(toast, "שגיאה התרחשה", "הייתה בעיה בשליחת הטופס", "error");
      }, 300);
    } finally {
      setIsSubmitted(false);
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
                type="string"
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
              {...register("address")}
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
            <Button
              colorScheme="yellow"
              type="submit"
              onClick={() => setIsSubmitted(true)}
            >
              שלח
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
};

export default ContactUsForm;
