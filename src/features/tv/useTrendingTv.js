import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getTrendingTv } from "../../services/tvAPI";

export function useTrendingTv(page) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["trendingTv", page],
    queryFn: () => getTrendingTv(page),
  });

  queryClient.prefetchQuery({
    queryKey: ["trendingTv", page + 1],
    queryFn: () => getTrendingTv(page + 1),
  });

  return { data, isLoading };
}
