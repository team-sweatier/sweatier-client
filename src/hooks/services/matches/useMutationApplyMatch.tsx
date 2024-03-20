import api from "@/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutationApplyMatch(matchId: string) {
  const queryClient = useQueryClient();
  const mutationFn = api.match.participateToMatch;

  return useMutation({
    mutationKey: ["match", matchId],
    mutationFn,
    onSuccess: () =>
      queryClient.invalidateQueries({
        exact: true,
        queryKey: ["match"],
      }),
  });
}

// interface MutationVariables {
//   matchId: string;
// }

// import api from "@/api";
// import {
//   UseMutationOptions,
//   useMutation,
//   useQueryClient,
// } from "@tanstack/react-query";

// export default function useMutationApplyMatch(matchId: string) {
//   const queryClient = useQueryClient();

//   const mutationFn = () => api.match.participateToMatch(matchId);

//   const options: UseMutationOptions<any, Error, MutationVariables> = {
//     mutationKey: ["match-apply", matchId],
//     mutationFn,
//     onSuccess: () => {
//       queryClient.invalidateQueries({
//         exact: true,
//         queryKey: ["matches"],
//       });
//     },
//   };

//   return useMutation(options);
// }
