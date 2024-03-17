import { useParams } from "react-router-dom";
import { useMovie } from "../features/movies/useMovie";

import Spinner from "../ui/Spinner";

function MovieDetail() {
  const { movieId } = useParams();
  const { data, isLoading } = useMovie(movieId);

  if (isLoading) return <Spinner />;

  const {
    imdb_id,
    title,
    status,
    runtime,
    release_date,
    production_countries,
    production_companies,
    poster_path,
    overview,
    genres,
  } = data;

  return (
    <>
      <h1 className="mb-4 text-center text-xl font-medium text-blue-600 underline underline-offset-4">
        Now watching, {title}
      </h1>
      <iframe
        src={`https://vidsrc.xyz/embed/movie?imdb=${imdb_id}`}
        className="m-auto h-[30%] w-full rounded-md md:h-[50%] lg:h-[70%] xl:h-[90%]"
        allowFullScreen
      ></iframe>

      <div className="my-8 flex gap-6 md:my-10">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="hidden w-[250px] rounded-md md:block"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl">{title}</h1>
          <p className="text-slate-200">{overview}</p>

          <div className="flex gap-2 text-slate-300">
            <span>{status}</span>
            <span>&bull;</span>
            <span>{release_date || "No release date"}</span>
            <span>&bull;</span>
            <span>{runtime} minutes</span>
          </div>

          <span className="flex gap-2 text-slate-300">
            {production_countries.map((country) => country.name).join(", ")}
          </span>

          <span className="flex gap-2 text-slate-300">
            {production_companies.map((company) => company.name).join(", ")}
          </span>

          <div className="flex gap-2">
            {genres.map((genre) => (
              <span
                className="rounded-full bg-blue-900 bg-opacity-30 px-[10px] py-[4px] text-sm text-blue-600"
                key={genre.id}
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetail;
