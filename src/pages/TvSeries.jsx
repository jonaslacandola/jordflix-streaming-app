import { useSearchParams } from "react-router-dom";
import { useTvSeries } from "../features/tv/useTvSeries";

import Card from "../ui/Card";
import List from "../ui/List";
import Spinner from "../ui/Spinner";
import Paginator from "../ui/Paginator";

function TvSeries() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const { data, isLoading } = useTvSeries(page);

  if (isLoading) return <Spinner />;

  const tvSeries = data?.results?.map((movie) => ({
    ...movie,
    media_type: "tv",
  }));
  const maxPage = data?.total_pages;

  return (
    <div className="flex flex-col gap-4">
      <List
        title="All TV Series"
        data={tvSeries}
        render={(series) => <Card key={series.id} movieTv={series} />}
      />
      <Paginator maxPage={maxPage} />
    </div>
  );
}

export default TvSeries;
