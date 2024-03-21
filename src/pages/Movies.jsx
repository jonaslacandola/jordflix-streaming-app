import { useMovies } from "../features/movies/useMovies";

import Card from "../ui/Card";
import List from "../ui/List";
import Spinner from "../ui/Spinner";
import Paginator from "../ui/Paginator";
import { useSearchParams } from "react-router-dom";

function Movies() {
  const [searchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page")) || 1;
  const { data, isLoading } = useMovies(page);

  if (isLoading) return <Spinner />;

  const movies = data?.results?.map((movie) => ({
    ...movie,
    media_type: "movie",
  }));
  const maxPage = data?.total_pages;

  return (
    <div className="flex flex-col gap-4">
      <List
        title="All Movies"
        data={movies}
        render={(movie) => <Card key={movie.id} movieTv={movie} />}
      />

      <Paginator maxPage={maxPage} />
    </div>
  );
}

export default Movies;
