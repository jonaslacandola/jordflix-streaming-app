import { Link } from "react-router-dom";
import Logo from "../ui/Logo";

function Hero() {
  return (
    <div className="h-screen w-full bg-gradient-to-t from-slate-950 to-slate-900 text-slate-50">
      <div className="m-auto flex h-full w-[80%] flex-col items-center justify-center gap-4 text-center">
        <Logo size="text-[8rem]" />
        <p className="mb-12 text-xl">
          Watch free HD movies and tv series, anytime, anywhere.
        </p>
        <Link
          to="/home"
          className="w-1/4 rounded-full bg-blue-600 p-4 font-medium outline outline-offset-2 outline-blue-600 focus:outline-2 "
        >
          <span>Watch Now</span>
        </Link>
      </div>
    </div>
  );
}

export default Hero;
