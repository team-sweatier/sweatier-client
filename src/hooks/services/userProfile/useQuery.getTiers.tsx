import api from "@/api";
import { useAuth } from "@/contexts/auth.context";
import { Tiers } from "@/contexts/tiers.context";

import { useQuery } from "@tanstack/react-query";

export default function useQueryGetMyTiers() {
  const { isLoggedIn } = useAuth();

  return useQuery<
    Awaited<ReturnType<typeof api.tier.getUserTiers>>,
    unknown,
    Tiers
  >({
    queryKey: ["tiers"],
    queryFn: api.tier.getUserTiers,
    enabled: isLoggedIn,
    retry: false,
    select: ({ tiers }) => {
      const result: Record<string, string> = {};
      tiers.forEach((tier) => {
        result[tier.sportType.name] = tier.value;
      });
      return result;
    },
  });
}
