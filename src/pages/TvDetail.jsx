import { useParams, useSearchParams } from "react-router-dom";
import { useTv } from "../features/tv/useTv";

import Spinner from "../ui/Spinner";
import Season from "../ui/Season";

function TvDetail() {
  const { tvId } = useParams();
  const [searchParams] = useSearchParams();
  const { data, isLoading } = useTv(tvId);

  const watchSeason = searchParams.getAll("season").at(0);
  const watchEpisode = searchParams.getAll("episode").at(0);

  if (isLoading) return <Spinner />;

  const {
    id,
    name,
    status,
    number_of_episodes,
    first_air_date,
    production_countries,
    production_companies,
    poster_path,
    overview,
    genres,
    seasons,
  } = data;

  return (
    <>
      {watchEpisode && (
        <>
          <h1 className="mb-4 text-center text-base font-medium text-blue-600 underline underline-offset-4 md:text-xl">
            Now watching, {name}
          </h1>
          <iframe
            src={`https://vidsrc.xyz/embed/tv?tmdb=${id}&season=${watchSeason}&episode=${watchEpisode}`}
            className="m-auto h-[30%] w-full rounded-md md:h-[50%] lg:h-[70%] xl:h-[90%]"
            referrerPolicy="origin"
            allowFullScreen
          ></iframe>
        </>
      )}

      <div className="mx-auto mb-10 w-[90%]">
        <div className="my-8 flex flex-col gap-6 md:my-10 md:flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${poster_path}`}
            alt={name}
            className="hidden w-[250px] rounded-md md:block"
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl">{name}</h1>
            <p className="text-sm text-slate-200 md:text-base">{overview}</p>

            <div className="flex gap-2 text-sm text-slate-300 md:text-base">
              <span>{status}</span>
              <span>&bull;</span>
              <span>{first_air_date}</span>
              <span>&bull;</span>
              <span>{number_of_episodes} Episodes</span>
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

        <div className="flex flex-col gap-2">
          {seasons.map((season, index) => (
            <Season key={index} season={season} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TvDetail;
