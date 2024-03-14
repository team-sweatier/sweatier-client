import api from "@/api";
import { CreateMatchDto } from "@/types/createMatch.dto";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationCreateMatch(matchDto: CreateMatchDto) {
  const queryClient = useQueryClient();
  const mutationFn = api.match.createMatch;

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["match-create", matchDto],
      }),
  });
}
