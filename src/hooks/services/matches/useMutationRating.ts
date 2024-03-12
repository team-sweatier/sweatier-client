import api from "@/api";
import { RatingDto } from "@/api/rating/rating.dto";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationRating(
  matchId: string,
  ratings: RatingDto[]
) {
  const queryClient = useQueryClient();
  const mutationFn = (ratings: RatingDto[]) =>
    api.rating.rateParticipants(matchId, ratings);

  return useMutation({
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({ exact: true, queryKey: ["rating"] }),
  });
}
