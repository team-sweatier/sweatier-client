"use client";

import api from "@/api";
import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const initialValue = {
  isAuthInitialized: false,
  isLoggedIn: false,
  logIn: () => {},
  logOut: () => {},
};

const AuthContext = createContext(initialValue);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: PropsWithChildren) {
  const [isAuthInitialized, setIsAuthInitialized] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = useCallback(() => setIsLoggedIn(true), []);
  const logOut = useCallback(() => setIsLoggedIn(false), []);

  const value: typeof initialValue = useMemo(
    () => ({
      isAuthInitialized,
      isLoggedIn,
      logIn,
      logOut,
    }),
    [isAuthInitialized, isLoggedIn, logIn, logOut]
  );

  useEffect(() => {
    (async () => {
      try {
        await api.auth.refreshToken();
        setIsLoggedIn(true);
      } catch (error) {
        setIsLoggedIn(false);
      } finally {
        setIsAuthInitialized(true);
      }
    })();
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
