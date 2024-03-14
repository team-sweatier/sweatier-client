"use client";

import api from "@/api";
import { useAuthStore } from "@/store";
import { useMutation } from "@tanstack/react-query";
import React, { useEffect } from "react";

function Authentication({ children }: { children: React.ReactNode }) {
  const {
    isAuthInitialized,
    isLoggedIn,
    logIn,
    logOut,
    setIsAuthInitialized,
    setUserId,
  } = useAuthStore();

  const { mutateAsync: refreshToken } = useMutation({
    mutationFn: api.auth.refreshToken,
  });

  useEffect(() => {
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
    checkAuth();
  }, [logIn, logOut, refreshToken, setIsAuthInitialized]);

  if (!isAuthInitialized) return null;

  return children;
}

export default Authentication;
