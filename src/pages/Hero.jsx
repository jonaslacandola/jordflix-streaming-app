import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function Hero() {
  return (
    <div className="h-screen w-full bg-gradient-to-t from-slate-950 to-slate-900 text-slate-50">
      <div className="m-auto flex h-full w-[80%] flex-col items-center justify-center gap-2 text-center">
        <Logo size="text-[5rem] md:text-[8rem]" />
        <p className="txt-lg mb-12 md:text-xl">
          Watch free HD movies and tv series, anytime, anywhere.
        </p>
        <Link
          to="/home"
          className="rounded-full bg-blue-600 p-3 text-sm font-medium outline outline-offset-2 outline-blue-600 focus:outline-2 md:w-1/4 md:p-4 md:text-base "
        >
          <span>Watch Now</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
