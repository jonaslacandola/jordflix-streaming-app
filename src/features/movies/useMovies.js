import { useQuery, useQueryClient } from "@tanstack/react-query";

import { getMovies } from "../../services/moviesAPI";

export function useMovies(page) {
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["movies", page],
    queryFn: () => getMovies(page),
  });

  queryClient.prefetchQuery({
    queryKey: ["movies", page + 1],
    queryFn: () => getMovies(page + 1),
  });

  return { data, isLoading };
}
