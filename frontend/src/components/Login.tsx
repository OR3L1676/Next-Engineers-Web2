import { useGoogleLogin } from "@react-oauth/google";
import { Button, Image, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUserInfo, { UserData } from "../hooks/useUserInfo";
import axios from "axios";
import { CloseIcon } from "@chakra-ui/icons";

interface Props {
  onConnectedUser: (connected: boolean) => void;
}

function LoginButton({ onConnectedUser }: Props) {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem("accessToken")
  );
  const { data, error } = useUserInfo(accessToken || "");
  const [premission, setPremission] = useState(false); 
  const [isConnectUser, setIsConnectUser] = useState(!!accessToken); 
  const [connectReq, setConnectReq] = useState<string | "">();
  const toast = useToast();
  const dbURI = import.meta.env.MONGODB_URI; 


  const connect = useGoogleLogin({
    onSuccess: (response: any) => {
      setAccessToken(response.access_token);
      localStorage.setItem("accessToken", response.access_token); // Store token
      setPremission(true)   
    },
    onError: (error) => {
      console.log("Login failed", error);
      setPremission(false)  
    },
  });

  useEffect(() => {
    if(!data) return;
      if(premission && connectReq === "/signup") {
      axios
        .post(`https://next-engineers-web-server.onrender.com/api/users${connectReq}`, {
          email: data.email,
          email_verified: data.email_verified,
          given_name: data.given_name,
          name: data.name,
          picture: data.picture,
          sub: data.sub,
        }, {
          withCredentials: true
        })
        .then((res) => {
          // //token section & check
          const {user, token} = res.data 
          console.log("Token: ", token)
          console.log("User Created Successfully", user);
          // //token section & check

          localStorage.setItem("JwtToken", token); 
          setIsConnectUser(true);
          onConnectedUser(true);
          toast({
            title: "יצירת חשבון",
            description: "החשבון שלך נוצר בהצלחה",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log("Error - signup:", err);
          setIsConnectUser(false)
          setPremission(false)  
          localStorage.removeItem('accessToken')
          toast({
            title: "שגיאה התרחשה",
            description: err.response.data || "הייתה בעיה ביצירת החשבון שלך",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        });
    } else if (premission && connectReq === "/signin") {
      axios
        .post(`https://next-engineers-web-server.onrender.com/api/users${connectReq}`, {
          email: data.email,
          sub: data.sub,
        }, {
          withCredentials: true
        })
        .then((res) => {
          // //token section & check
          const {user, token} = res.data
          console.log("Token: ", token)
          console.log("User Logged in Successfully", user); 
          // //token section & check  

          localStorage.setItem("JwtToken", token); 
          setIsConnectUser(true);
          onConnectedUser(true);
          toast({
            title: "התחברות",
            description: "התחברת לחשבון בהצלחה",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        })
        .catch((err) => {          
          console.log("Error - signin:", err.message);
          setIsConnectUser(false)
          setPremission(false)  
          toast({
            title: "שגיאה התרחשה",
            description: err.response.data || "הייתה בעיה להתחבר לחשבון שלך",
            status: "error",
            duration: 9000,
            isClosable: true,
          });
        }).finally(()=> {
          console.log("finnaly check - is isConnectUser",isConnectUser);
          console.log("finnaly check - premission",premission);
        })
  }
  }, [data, toast]);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("kidsClubAccess");
    localStorage.removeItem("JwtToken");
    setAccessToken(null);
    setIsConnectUser(false);
    onConnectedUser(false);
  };

  return (
    <>
      {data && isConnectUser ? (
        <>
          <Button
            onClick={handleLogout}
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
            הירשם
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
