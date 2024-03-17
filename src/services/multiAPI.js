const API_KEY = "c0b92ada19850ec2e83b48badd3afaff";

export async function searchMovieTv(query, page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${query}&page=${page}`,
  );
  const data = await res.json();

  return data;
}
