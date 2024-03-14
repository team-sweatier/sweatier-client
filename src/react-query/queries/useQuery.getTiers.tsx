import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { Tier } from "@/contexts/tiers.context";

import { useQuery } from "@tanstack/react-query";

export default function useQueryGetMyTiers() {
  const { isLoggedIn } = useAuth();

  return useQuery<
    Awaited<ReturnType<typeof api.tier.getUserTiers>>,
    unknown,
    Tier[]
  >({
    queryKey: ["tiers"],
    queryFn: api.tier.getUserTiers,
    enabled: isLoggedIn,
    retry: false,
    select: ({ tiers }) => tiers,
  });
}
