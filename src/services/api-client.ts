import axios from "axios";

const googleClient = axios.create({
  baseURL: "https://www.googleapis.com/oauth2/v3/",
});

export default googleClient;
