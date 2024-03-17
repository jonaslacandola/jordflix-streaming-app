import { useSearchParams } from "react-router-dom";

function Episode({ episode, season }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleWatch() {
    searchParams.set("season", season);
    searchParams.set("episode", episode);
    setSearchParams(searchParams);
  }

  return (
    <button
      onClick={handleWatch}
      className="h-9 w-[4rem] cursor-pointer rounded-md bg-slate-900 px-4 py-2 text-center text-sm text-blue-600 transition-colors duration-300 hover:bg-slate-950"
    >
      {episode}
    </button>
  );
}

export default Episode;
