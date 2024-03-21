import { useTrendingTv } from "../features/tv/useTrendingTv";

import Card from "./Card";
import Spinner from "./Spinner";
import List from "./List";

function TrendingTv() {
  const { data, isLoading } = useTrendingTv(1);

  if (isLoading) return <Spinner />;

  const series = data.results;

  return (
    <List
      title="Trending TV Series"
      data={series}
      render={(tv) => <Card key={tv.id} movieTv={tv} />}
    />
  );
}

export default TrendingTv;
