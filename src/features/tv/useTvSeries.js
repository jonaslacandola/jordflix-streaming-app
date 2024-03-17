import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getTv } from "../../services/tvAPI";

export function useTvSeries(page) {
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery({
    queryKey: ["tv", page],
    queryFn: () => getTv(page),
  });

  queryClient.prefetchQuery({
    queryKey: ["tv", page + 1],
    queryFn: () => getTv(page + 1),
  });

  return { data, isLoading };
}
