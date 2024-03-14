import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { Profile } from "@/contexts/profile.context";
import { useQuery } from "@tanstack/react-query";

export default function useQueryGetProfile() {
  const { isLoggedIn } = useAuth();

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
