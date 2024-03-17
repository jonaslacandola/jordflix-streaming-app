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
      className="w-[20%] rounded-md bg-slate-50 px-4 py-2 text-slate-900"
      value={query}
      onInput={(event) => setQuery(event.target.value)}
      onKeyDownCapture={handleSearch}
    />
  );
}

export default Searchbar;
