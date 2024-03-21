import PaginationButton from "./PaginationButton";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useState } from "react";

function Paginator({ maxPage }) {
  const [page, setPage] = useState(1);
  const paginators = Array.from(
    { length: page + 5 - page },
    (_, i) => page + i,
  );

  function next() {
    setPage((page) => page + 5);
  }

  function previous() {
    setPage((page) => page - 5);
  }

  return (
    <div className="flex justify-center gap-2 p-10">
      <button
        className="text-2xl text-blue-600 disabled:cursor-not-allowed disabled:text-blue-900"
        onClick={previous}
        disabled={page <= 1}
      >
        <HiChevronLeft />
      </button>

      {paginators.map((num, i) => (
        <PaginationButton key={i} page={num} />
      ))}

      <button
        className="text-2xl text-blue-600 disabled:cursor-not-allowed disabled:text-blue-900"
        onClick={next}
        disabled={page + 5 >= maxPage}
      >
        <HiChevronRight />
      </button>
    </div>
  );
}

export default Paginator;
