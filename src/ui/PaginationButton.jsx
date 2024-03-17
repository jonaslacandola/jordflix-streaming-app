import { useSearchParams } from "react-router-dom";

function PaginationButton({ page }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currPage = searchParams.get("page");

  function handleSelectPage() {
    searchParams.set("page", page);
    setSearchParams(searchParams);
  }

  return (
    <button
      className={`border-2 border-blue-600 px-4 py-2 transition-colors duration-300 hover:bg-blue-600 ${currPage == page && "bg-blue-600"}`}
      onClick={handleSelectPage}
    >
      {page}
    </button>
  );
}

export default PaginationButton;
