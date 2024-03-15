"use client";

import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const KakaoCallbackPage = ({
  searchParams,
}: {
  searchParams: { code: string };
}) => {
  const { data: myProfile } = useQuery({
    queryKey: ["myProfile"],
    queryFn: api.user.getMyProfile,
  });

  const { logIn } = useAuth();

  const router = useRouter();
  const code = searchParams.code;

  useEffect(() => {
    const signInAndRedirect = async () => {
      await api.auth.signInKaKao(code);

      logIn();

      const nickname = myProfile?.nickName;
      if (nickname) {
        router.push("/accounts/user-registration");
      } else {
        router.push("/");
      }
    };

    signInAndRedirect();
  }, [code, router]);

  return null;
};

export default KakaoCallbackPage;
