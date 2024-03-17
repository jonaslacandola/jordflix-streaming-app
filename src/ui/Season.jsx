import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import Episode from "./Episode";

function Season({ season }) {
  const [isOpen, setIsOpen] = useState(false);
  const { season_number, episode_count } = season;

  function handleIsOpen() {
    setIsOpen((open) => !open);
  }

  return (
    <div>
      <div
        className={`flex cursor-pointer items-center justify-between bg-slate-800 px-4 py-2 ${isOpen ? "rounded-t-md" : "rounded-md"}`}
        onClick={handleIsOpen}
      >
        <span>Season {season_number}</span>
        <span className="text-lg text-blue-600">
          {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </span>
      </div>

      {isOpen && (
        <div className="flex flex-row flex-wrap gap-2 p-2">
          {[...Array(episode_count)].map((el, index) => (
            <Episode key={index} episode={index + 1} season={season_number} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Season;
