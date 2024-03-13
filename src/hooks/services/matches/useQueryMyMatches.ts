import api from "@/api";
import { useQuery } from "@tanstack/react-query";

function useQueryGetMyMatches() {
  return useQuery({
    queryKey: ["myMatches"],
    queryFn: api.user.getMyMatches,
  });
}

export default useQueryGetMyMatches;
