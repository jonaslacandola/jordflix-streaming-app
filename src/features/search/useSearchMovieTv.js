import { useQuery } from "@tanstack/react-query";
import { searchMovieTv } from "../../services/multiAPI";

export function useSearchMovieTv(query, page) {
  const { data, isLoading } = useQuery({
    queryKey: ["search", query],
    queryFn: () => searchMovieTv(query, page),
  });

  return { data, isLoading };
}
