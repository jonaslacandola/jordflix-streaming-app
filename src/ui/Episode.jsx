import { useSearchParams } from "react-router-dom";

function Episode({ episode, season }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currEp = Number(searchParams.get("episode"));
  const currSs = Number(searchParams.get("season"));
  const isActive = currEp === episode && currSs === season;

  function handleWatch() {
    searchParams.set("season", season);
    searchParams.set("episode", episode);
    setSearchParams(searchParams);

    const parent = document.querySelector("#main");
    parent.scrollTop = 0;
  }

  return (
    <button
      onClick={handleWatch}
      className={`h-9 w-[4rem] cursor-pointer rounded-md px-4 py-2 text-center text-sm transition-colors duration-300 hover:bg-slate-950 ${isActive ? "bg-blue-600 text-slate-900" : " bg-slate-900 text-blue-600"}`}
    >
      {episode}
    </button>
  );
}

export default Episode;
