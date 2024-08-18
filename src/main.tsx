import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="898823463581-3lr94ge72lohm58952tbdcm2srvqkrbo.apps.googleusercontent.com">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
