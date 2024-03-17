import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getTrendingMovies } from "../../services/moviesAPI";

export function useTrendingMovies(page) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["trendingMovie", page],
    queryFn: () => getTrendingMovies(page),
  });

  queryClient.prefetchQuery({
    queryKey: ["trendingMovie", page + 1],
    queryFn: () => getTrendingMovies(page + 1),
  });

  return { data, isLoading };
}
