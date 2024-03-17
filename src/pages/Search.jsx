import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchMovieTv } from "../features/search/useSearchMovieTv";

import Spinner from "../ui/Spinner";
import Card from "../ui/Card";
import List from "../ui/List";

function Search() {
  const [page, setPage] = useState(1);
  const { query } = useParams();
  const { data, isLoading } = useSearchMovieTv(query, page);

  if (isLoading) return <Spinner />;

  const results = data.results;

  return (
    <div className="flex flex-col gap-4">
      {results.length ? (
        <List
          title={
            <>
              <span>Search results for </span>
              <span className="font-semibold capitalize text-blue-600">
                {query}
              </span>
            </>
          }
          data={results}
          render={(result) => <Card key={result.id} movieTv={result} />}
        />
      ) : (
        <div className="w-full">
          <p className="mt-10 text-center text-2xl">
            Movie or TV{" "}
            <span className="font-semibold capitalize text-blue-600">
              {query}
            </span>{" "}
            couldn't be found
          </p>
        </div>
      )}
    </div>
  );
}

export default Search;
