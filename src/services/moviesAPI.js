const API_KEY = "c0b92ada19850ec2e83b48badd3afaff";

export async function getMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&page=${page}"`,
  );
  const data = await res.json();

  return data;
}
export async function getTrendingMovies(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&page=${page}"`,
  );
  const data = await res.json();

  return data;
}

export async function getMovieDetail(movieId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`,
  );
  const data = await res.json();

  return data;
}
