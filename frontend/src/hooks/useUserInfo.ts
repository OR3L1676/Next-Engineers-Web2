import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface UserData {
  email: string,
  email_verified: boolean,
  family_name: string,
  given_name: string,
  name: string,
  picture: string,
  sub: string,
}

const useUserInfo = (accessToken: string) => {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!accessToken) return; 

    const controller = new AbortController();

    apiClient
      .get<UserData>('userinfo', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        signal: controller.signal
      })
      .then((res) => {
        setData(res.data);
        console.log('Hook res: ', res);
        
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message || 'Something went wrong');
      });

    return () => controller.abort();
  }, [accessToken]);

  return { data, error };
};

export default useUserInfo;
