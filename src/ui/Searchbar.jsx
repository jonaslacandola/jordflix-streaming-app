import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(event) {
    const { keyCode } = event;
    if (!query) return;
    if (keyCode === 13) {
      navigate(`/search/${query}`);
      setQuery("");
    }
  }

  return (
    <input
      type="text"
      placeholder="Search movies or tv series"
      className="w-2/4 rounded-md bg-slate-50 px-3 py-1 text-sm text-slate-900 md:w-[20%] md:px-4 md:py-2 md:text-base"
      value={query}
      onInput={(event) => setQuery(event.target.value)}
      onKeyDownCapture={handleSearch}
    />
  );
}

export default Searchbar;
