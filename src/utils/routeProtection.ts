import { useAuthStore } from "@/store";
import useProfileStore from "@/store/profile.store";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const protectPrivateRoute = () => {
  const router = useRouter();
  const { isLoggedIn } = useAuthStore();
  const { profile } = useProfileStore();

  useEffect(() => {
    const hasRegistered = profile?.nickName ? "true" : "false"; // 사용자 정보 등록 상태 체킹

    const path = router.pathname;

    if (!isLoggedIn && path === "/my-page") {
      router.push("/signup");
      return;
    }

    if (isLoggedIn && !hasRegistered && !/^\/user-dashboard/.test(path)) {
      router.push("/accounts/user-registration");
      return;
    }
  }, [router]);
};
