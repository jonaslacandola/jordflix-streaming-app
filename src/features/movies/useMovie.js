import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../../services/moviesAPI";

export function useMovie(movieId) {
  const { data, isLoading } = useQuery({
    queryKey: ["movie", movieId],
    queryFn: () => getMovieDetail(movieId),
  });

  return { data, isLoading };
}
