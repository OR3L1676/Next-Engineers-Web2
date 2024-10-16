import { useGoogleLogin } from "@react-oauth/google";
import { Button, Image, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUserInfo, { UserData } from "../hooks/useUserInfo";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";

function LoginButton() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const { data, error } = useUserInfo(accessToken || "");
  const [isConnectUser, setIsConnectUser] = useState(false);
  const [connectReq, setConnectReq] = useState<string | "">();
  const toast = useToast();

  const connect = useGoogleLogin({
    onSuccess: (response: any) => {
      setAccessToken(response.access_token);
    },
    onError: (error) => {
      console.log("Login failed", error);
    },
  });

  useEffect(() => {
    if (data && connectReq === "/signup") {
      axios
        .post(`http://localhost:3000/api/users${connectReq}`, {
          email: data.email,
          email_verified: data.email_verified,
          given_name: data.given_name,
          name: data.name,
          picture: data.picture,
          sub: data.sub,
        })
        .then((res) => {
          console.log("User Created in Successfully", res.data);
          setIsConnectUser(true);
          setTimeout(() => {
            toast({
              title: "יצירת חשבון",
              description: "החשבון שלך נוצר בהצלחה",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }, 300);
        })
        .catch((err) => {
          console.log("Error - signup:", err.message);
          setTimeout(() => {
            toast({
              title: "שגיאה התרחשה",
              description: "הייתה בעיה ביצירת החשבון שלך",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }, 300);
        });
    } else if (data && connectReq === "/signin") {
      axios
        .post(`http://localhost:3000/api/users${connectReq}`, {
          email: data.email,
          sub: data.sub,
        })
        .then((res) => {
          console.log("User Logged in Successfully", res.data);
          setIsConnectUser(true);
          setTimeout(() => {
            toast({
              title: "התחברות",
              description: "התחברת לחשבון בהצלחה",
              status: "success",
              duration: 9000,
              isClosable: true,
            });
          }, 300);
        })
        .catch((err) => {
          console.log("Error - signin:", err.message);
          setTimeout(() => {
            toast({
              title: "שגיאה התרחשה",
              description: "הייתה בעיה להתחבר לחשבון שלך",
              status: "error",
              duration: 9000,
              isClosable: true,
            });
          }, 300);
        });
    }
  }, [data, connectReq]); // add connectReq here

  return (
    <>
      {/*&& isLoggedIn && !errorPost */}
      {data && isConnectUser ? (
        <>
          <Button
            onClick={() => setIsConnectUser(false)}
            leftIcon={<CloseIcon />}
            colorScheme="red"
            variant="outline"
            border="0px"
          >
            צא
          </Button>
          <Button variant="outline" colorScheme="red" size="sm" py={4}>
            {data.name}
            <Image src={data.picture} boxSize={7} borderRadius="full" ml={2} />
          </Button>
        </>
      ) : (
        <>
          <Button
            onClick={() => {
              setConnectReq("/signup");
              connect();
            }}
            variant="outline"
            colorScheme="red"
            size="sm"
          >
            הירשם{" "}
          </Button>

          <Button
            onClick={() => {
              setConnectReq("/signin");
              connect();
            }}
            backgroundColor="#3AB9FF"
            color="white"
            _hover={{ backgroundColor: "skyblue" }}
            size="sm"
            mr={4}
          >
            התחבר
          </Button>
        </>
      )}
    </>
  );
}

export default LoginButton;
