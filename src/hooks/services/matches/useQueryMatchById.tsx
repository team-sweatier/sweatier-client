import api from "@/api";
import { useQuery } from "@tanstack/react-query";

export default function useQueryMatchById(matchId: string) {
  const {
    data: match,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["match", matchId],
    queryFn: () => api.match.getMatchesByMatchId(matchId),
    refetchOnWindowFocus: true,
  });

  return { match, isLoading, error };
}
