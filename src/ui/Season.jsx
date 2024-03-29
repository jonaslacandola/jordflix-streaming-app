import { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi2";
import Episode from "./Episode";

function Season({ season, maxEpisode }) {
  const [isOpen, setIsOpen] = useState(false);
  const { season_number, episode_count } = season;
  const { onSeason, currEpisode } = maxEpisode;

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
        <div className="flex flex-wrap gap-1 py-1">
          {[...Array(episode_count)].map((el, index) =>
            onSeason === season_number && currEpisode >= index + 1 ? (
              <Episode key={index} episode={index + 1} season={season_number} />
            ) : onSeason != season_number ? (
              <Episode key={index} episode={index + 1} season={season_number} />
            ) : (
              ""
            ),
          )}
        </div>
      )}
    </div>
  );
}

export default Season;
