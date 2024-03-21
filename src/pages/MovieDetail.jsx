import { useParams } from "react-router-dom";
import { useMovie } from "../features/movies/useMovie";

import Spinner from "../ui/Spinner";
import { useState } from "react";

function MovieDetail() {
  const [server, setServer] = useState("xyz");
  const { movieId } = useParams();
  const { data, isLoading } = useMovie(movieId);

  function handleChangeServer(to) {
    setServer(to);
  }

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
      <h1 className="mb-4 text-center text-base font-medium text-blue-600 underline underline-offset-4 md:text-xl">
        Now watching, {title}
      </h1>
      <iframe
        src={`https://vidsrc.${server}/embed/movie/${imdb_id}`}
        className="m-auto h-[30%] w-full rounded-md md:h-[50%] lg:h-[70%] xl:h-[90%]"
        allowFullScreen
      ></iframe>
      <div className="mt-4 flex justify-center gap-2">
        <button
          className={`border-2 border-blue-600 px-3 py-2 transition-colors duration-300 hover:bg-blue-600 ${server === "xyz" && "bg-blue-600"}`}
          onClick={() => handleChangeServer("xyz")}
        >
          Server 1
        </button>
        <button
          className={`border-2 border-blue-600 px-3 py-2 transition-colors duration-300 hover:bg-blue-600 ${server === "to" && "bg-blue-600"}`}
          onClick={() => handleChangeServer("to")}
        >
          Server 2
        </button>
      </div>

      <div className="my-8 flex flex-col gap-6 md:my-10 md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className="hidden w-[250px] rounded-md md:block"
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl">{title}</h1>
          <p className="text-sm text-slate-200 md:text-base">{overview}</p>

          <div className="flex gap-2 text-sm text-slate-300 md:text-base">
            <span>{status}</span>
            <span>&bull;</span>
            <span>{release_date || "No release date"}</span>
            <span>&bull;</span>
            <span>{runtime} minutes</span>
          </div>

          <span className="flex gap-2 text-sm text-slate-300 md:text-base">
            {production_countries.map((country) => country.name).join(", ")}
          </span>

          <span className="flex gap-2 text-sm text-slate-300 md:text-base">
            {production_companies.map((company) => company.name).join(", ")}
          </span>

          <div className="flex gap-2">
            {genres.map((genre) => (
              <span
                className="rounded-full bg-blue-900 bg-opacity-30 px-[10px] py-[4px] text-[0.81rem] text-blue-600 md:text-sm"
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
