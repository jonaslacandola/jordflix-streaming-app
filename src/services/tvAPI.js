const API_KEY = "c0b92ada19850ec2e83b48badd3afaff";

export async function getTv(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&page=${page}`,
  );
  const data = res.json();

  return data;
}

export async function getTrendingTv(page) {
  const res = await fetch(
    `https://api.themoviedb.org/3/trending/tv/day?api_key=${API_KEY}&page=${page}`,
  );
  const data = await res.json();

  return data;
}

export async function getTvDetail(tvId) {
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${tvId}?api_key=${API_KEY}`,
  );
  const data = res.json();

  return data;
}
