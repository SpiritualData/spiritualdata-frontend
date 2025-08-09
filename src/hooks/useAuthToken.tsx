import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { setToken, clearToken } from "../utils/axios";

export const useAuthToken = () => {
  const { isLoaded, userId, getToken } = useAuth();
  const [isTokenSet, setIsTokenSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initializeToken = async () => {
      if (!isLoaded) return;

      try {
        setIsLoading(true);

        if (userId) {
          const token = await getToken();
          if (token) {
            setToken(token);
            setIsTokenSet(true);
          } else {
            clearToken();
            setIsTokenSet(false);
          }
        } else {
          clearToken();
          setIsTokenSet(false);
        }
      } catch (error) {
        console.error("Error initializing token:", error);
        clearToken();
        setIsTokenSet(false);
      } finally {
        setIsLoading(false);
      }
    };

    initializeToken();
  }, [isLoaded, userId, getToken]);

  const refreshToken = async () => {
    if (!isLoaded || !userId) return false;

    try {
      const token = await getToken();
      if (token) {
        setToken(token);
        setIsTokenSet(true);
        return true;
      } else {
        clearToken();
        setIsTokenSet(false);
        return false;
      }
    } catch (error) {
      console.error("Error refreshing token:", error);
      clearToken();
      setIsTokenSet(false);
      return false;
    }
  };

  return {
    isLoaded,
    userId,
    isTokenSet,
    isLoading,
    refreshToken,
  };
};
