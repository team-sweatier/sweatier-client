"use client";

import api from "@/api";
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

  const router = useRouter();
  const code = searchParams.code;

  useEffect(() => {
    const signInAndRedirect = async () => {
      await api.auth.signInKaKao(code);

      if (!myProfile?.nickName) {
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
