import Logo from "../ui/Logo";
import TrendingMovies from "../ui/TrendingMovies";
import TrendingTv from "../ui/TrendingTv";

function Home() {
  return (
    <div className="flex flex-col gap-[3rem]">
      <div className="relative flex flex-col justify-center gap-2 py-[5rem] text-center">
        <div className="z-10">
          <Logo size="text-[5rem] " />
          <p>Watch free HD movies and tv series, anytime, anywhere.</p>
        </div>
        <img
          className="absolute h-[300px] w-full rounded-md object-cover object-top opacity-25 blur-[0.9px]"
          src="https://cdn.wallpapersafari.com/65/20/HbRlwB.jpg"
          alt="background-movies"
        />
      </div>
      <TrendingMovies />
      <TrendingTv />
    </div>
  );
}

export default Home;
