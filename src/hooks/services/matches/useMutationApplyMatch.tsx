import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationApplyMatch(matchId: string) {
  const queryClient = useQueryClient();
  const mutationFn = api.match.participateToMatch;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["match-apply", matchId],
      }),
  });
}
