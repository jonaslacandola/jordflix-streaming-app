import { useState } from "react";
import { useTrendingMovies } from "../features/movies/useTrendingMovies";

import Card from "./Card";
import Spinner from "./Spinner";
import List from "./List";

function TrendingMovies() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useTrendingMovies(page);

  if (isLoading) return <Spinner />;

  const movies = data.results;

  return (
    <div className="flex flex-col gap-4">
      <List
        title="Trending Movies"
        data={movies}
        render={(movie) => <Card key={movie.id} movieTv={movie} />}
      />
    </div>
  );
}

export default TrendingMovies;
