import { useNavigate } from "react-router-dom";
import { HiHandThumbUp } from "react-icons/hi2";

function Card({ movieTv }) {
  const navigate = useNavigate();
  const { poster_path, media_type, id } = movieTv;

  const release_year =
    movieTv.release_date?.split("-").at(0) ||
    movieTv.first_air_date?.split("-").at(0);
  const title = movieTv?.title || movieTv?.name;

  function handlePlay() {
    if (media_type === "movie") navigate(`/movie/${id}`);
    else navigate(`/tv/${id}`);
  }

  return (
    <div
      className="movie-card flex cursor-pointer flex-col gap-2"
      onClick={handlePlay}
    >
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={movieTv.title}
          className="h-[300px] w-[250px] rounded-md md:h-[321px] xl:h-[358px]"
        />
      ) : (
        <img
          src="../../EmptyPoster.png"
          alt={movieTv.title}
          className="h-[300px] w-[250px] rounded-md md:h-[321px] xl:h-[358px]"
        />
      )}

      <div className="flex flex-col gap-[4px]">
        <p className="truncate text-sm text-slate-50 md:text-base">{title}</p>

        <div className="flex items-center justify-between text-[0.84rem] text-blue-600 md:text-sm">
          <div className="flex gap-2">
            <span>{release_year}</span>
            {media_type && (
              <>
                <span>&bull;</span>
                <span>{media_type?.toUpperCase()}</span>
              </>
            )}
          </div>
          <div className="flex items-center gap-[4px]">
            <HiHandThumbUp className="text-lg" />
            <span>{Math.floor(movieTv.popularity)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
