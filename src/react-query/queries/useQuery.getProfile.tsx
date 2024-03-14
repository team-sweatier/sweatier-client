import api from "@/api";
import { Profile } from "@/contexts/profile.context";
import { useAuthStore } from "@/store";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetProfile() {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  return useQuery<
    Awaited<ReturnType<typeof api.user.getMyProfile>>,
    unknown,
    Profile
  >({
    queryKey: ["profile"],
    queryFn: api.user.getMyProfile,
    enabled: isLoggedIn,
    retry: false,
    select: ({ userId, ...profile }) => ({
      id: userId,
      ...profile,
      imgUrl: "",
    }),
  });
}
