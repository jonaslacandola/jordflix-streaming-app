import Logo from "../ui/Logo";
import TrendingMovies from "../ui/TrendingMovies";
import TrendingTv from "../ui/TrendingTv";

function Home() {
  return (
    <div className="flex flex-col gap-[3rem]">
      <div className="relative flex flex-col justify-center gap-2 pb-4 pt-10 text-center md:py-[5rem]">
        <div className="z-10 flex flex-col items-center justify-center">
          <Logo size="text-[4rem] md:text-[5rem]" />
          <p className="w-1/2 text-center text-sm md:text-base">
            Watch free HD movies and tv series, anytime, anywhere.
          </p>
        </div>
        <img
          className="absolute h-[200px] w-full rounded-md object-cover object-top opacity-25 blur-[0.9px] md:h-[300px]"
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
