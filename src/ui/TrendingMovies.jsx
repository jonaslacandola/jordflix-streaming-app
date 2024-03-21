import { useTrendingMovies } from "../features/movies/useTrendingMovies";

import Card from "./Card";
import Spinner from "./Spinner";
import List from "./List";

function TrendingMovies() {
  const { data, isLoading } = useTrendingMovies(1);

  if (isLoading) return <Spinner />;

  const movies = data.results;

  return (
    <List
      title="Trending Movies"
      data={movies}
      render={(movie) => <Card key={movie.id} movieTv={movie} />}
    />
  );
}

export default TrendingMovies;
