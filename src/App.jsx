import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Hero from "./pages/Hero";
import AppLayout from "./ui/AppLayout";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import Search from "./pages/Search";
import TvSeries from "./pages/TvSeries";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route element={<AppLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/movie" element={<Movies />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
            <Route path="/tv" element={<TvSeries />} />
            <Route path="/tv/:tvId" element={<TvDetail />} />
            <Route path="/search/:query" element={<Search />} />
          </Route>
          <Route path="*" element={<span>Page not found</span>} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
