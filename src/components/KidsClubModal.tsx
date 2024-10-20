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
  useToast, // Import the useToast hook from Chakra UI
} from "@chakra-ui/react";
import React from "react";

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

  const handleKidsClubPass = (password: string) => {
    const acssesPassword = import.meta.env.VITE_KIDS_CLUB_PASSWORD;
    if (password === acssesPassword) {
      console.log("add to the user the key in the database");
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
    } else {
      toast({
        title: "שגיאה",
        description: "סיסמא שגויה",
        status: "error", // Change status to error for incorrect password
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
            <Input ref={passwordRef} type="string" />{" "}
            {/* Use type="password" */}
          </FormControl>
        </ModalBody>
        <ModalFooter justifyContent={"left"}>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              if (passwordRef.current) {
                handleKidsClubPass(passwordRef.current.value); // Pass input value to the handler
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
