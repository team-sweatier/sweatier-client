import api from "@/api";
import { useAuthStore } from "@/store";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";

function Authentication({ children }: { children: React.ReactNode }) {
  const { isAuthInitialized, logIn, logOut, setIsAuthInitialized } =
    useAuthStore();
  const { mutateAsync: refreshToken } = useMutation({
    mutationFn: api.auth.refreshToken,
  });

  const checkAuth = async () => {
    try {
      await refreshToken();
      logIn();
    } catch (error) {
      logOut();
    } finally {
      setIsAuthInitialized(true);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (!isAuthInitialized) return null;

  return <>{children}</>;
}

export default Authentication;
