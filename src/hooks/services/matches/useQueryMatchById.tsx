import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMatchById(matchId: string) {
  const {
    data,

    refetch,
  } = useQuery({
    queryKey: ["match", matchId],
    queryFn: () => api.match.getMatchByMatchId(matchId),
    refetchOnWindowFocus: true,
  });

  return { data, refetch };
}
