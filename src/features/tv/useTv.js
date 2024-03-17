import { useQuery } from "@tanstack/react-query";
import { getTvDetail } from "../../services/tvAPI";

export function useTv(tvId) {
  const { data, isLoading } = useQuery({
    queryKey: ["tv", tvId],
    queryFn: () => getTvDetail(tvId),
  });

  return { data, isLoading };
}
