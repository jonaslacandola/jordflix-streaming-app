import { useState } from "react";
import { useTrendingTv } from "../features/tv/useTrendingTv";

import Card from "./Card";
import Spinner from "./Spinner";
import List from "./List";

function TrendingTv() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useTrendingTv(page);

  if (isLoading) return <Spinner />;

  const series = data.results;

  return (
    <div className="flex flex-col gap-4">
      <List
        title="Trending TV Series"
        data={series}
        render={(tv) => <Card key={tv.id} movieTv={tv} />}
      />
    </div>
  );
}

export default TrendingTv;
