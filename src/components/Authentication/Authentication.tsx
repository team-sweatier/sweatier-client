"use client";

import api from "@/api";
import { useAuthStore, useModalStore } from "@/store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import NoUserProfileModal from "../NoUserProfileModal";

function Authentication({ children }: { children: React.ReactNode }) {
  const {
    isAuthInitialized,
    isLoggedIn,
    logIn,
    logOut,
    setIsAuthInitialized,
    setUserId,
  } = useAuthStore();
  const { open } = useModalStore();
  const pathname = usePathname();
  const { mutateAsync: refreshToken } = useMutation({
    mutationFn: api.auth.refreshToken,
  });
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile"],
    queryFn: api.user.getMyProfile,
    enabled: isLoggedIn,
  });

  useEffect(() => {
    if (
      isAuthInitialized &&
      !myProfile &&
      pathname !== "/accounts/user-registration"
    ) {
      open(<NoUserProfileModal />);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthInitialized, myProfile, pathname]);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await refreshToken();
        logIn();
        const userId = myProfile?.userId;
        if (userId) setUserId(userId);
      } catch (error) {
        logOut();
      } finally {
        setIsAuthInitialized(true);
      }
    };
    checkAuth();
  }, [logIn, logOut, refreshToken, setIsAuthInitialized]);

  useEffect(() => {
    // 로그인 상태가 true이고 myProfile존재할때  userId를 전역상태에 set
    if (isLoggedIn && myProfile) {
      const userId = myProfile.userId;
      if (userId) {
        setUserId(userId);
      }
    }
  }, [isLoggedIn, myProfile, setUserId]);

  if (!isAuthInitialized) return null;

  return <>{children}</>;
}

export default Authentication;
