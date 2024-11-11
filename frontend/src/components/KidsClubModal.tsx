import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface KidsClubModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnectedUser: () => void;
}

function KidsClubModal({
  isOpen,
  onClose,
  onConnectedUser,
}: KidsClubModalProps) {
  const passwordRef = React.useRef<HTMLInputElement>(null);
  const toast = useToast();
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleKidsClubPass = (password: string) => {
    const accessPassword = import.meta.env.VITE_KIDS_CLUB_PASSWORD;
    if (password === accessPassword) {
      toast({
        title: "התחברת בהצלחה",
        description: "הכנסת סיסמא נכונה",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      onClose();
      onConnectedUser();
      localStorage.setItem("kidsClubAccess", "true");
      setTimeout(() => {
        navigate("/KidsClub"); // Navigate to KidsClub after successful login
      }, 500);
    } else {
      toast({
        title: "שגיאה",
        description: "סיסמא שגויה",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Modal initialFocusRef={passwordRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent textAlign={"right"}>
        <ModalHeader>מועדון הילדים</ModalHeader>
        <ModalCloseButton left="10px" />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel textAlign={"right"}>סיסמא</FormLabel>
            <Input ref={passwordRef} type="password" />
          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent={"left"}>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              if (passwordRef.current) {
                handleKidsClubPass(passwordRef.current.value);
              }
            }}
          >
            התחברות
          </Button>
          <Button onClick={onClose}>ביטול</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default KidsClubModal;
