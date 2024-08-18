import { useGoogleLogin } from "@react-oauth/google";
import { Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useUserInfo, { UserData } from "../hooks/useUserInfo";

interface Props {
  userData: UserData;
}

function LoginButton() {
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const { data, error } = useUserInfo(accessToken || ""); // Ensure it gets a string

  const login = useGoogleLogin({
    onSuccess: (response: any) => {
      setAccessToken(response.access_token); // Store the access token
    },
    onError: (error) => {
      console.log("Login failed", error);
    },
  });

  useEffect(() => {
    if (data) console.log("User Data:", data);
    if (error) console.log("Error:", error);
  }, [data, error]);

  return (
    <>
      {data ? (
        <>
          <Button variant="outline" colorScheme="red" size="sm" py={4}>
            {data.name}
            <Image
              src={data.picture}
              boxSize={7}
              borderRadius="full"
              alt="Profile"
              ml={2}
            />
          </Button>
        </>
      ) : (
        <>
        <Button
          onClick={() => login()}
          variant="outline"
          colorScheme="red"
          size="sm"
        >
          הירשם{" "}
        </Button>

        <Button
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
