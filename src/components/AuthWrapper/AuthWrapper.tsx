"use client";

import { useAuth } from "@/contexts/auth.context";
import React from "react";

interface AuthWrapperProps {
  loggedInElement: React.ReactNode;
  notLoggedInElement?: React.ReactNode;
}

function AuthWrapper({
  loggedInElement,
  notLoggedInElement = null,
}: AuthWrapperProps) {
  const { isAuthInitialized, isLoggedIn } = useAuth();

  if (!isAuthInitialized) return null;
  if (!isLoggedIn) return notLoggedInElement;

  return loggedInElement;
}

export default AuthWrapper;
