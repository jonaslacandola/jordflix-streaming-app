import { Link } from "react-router-dom";

function Logo({ size = "text-4xl" }) {
  return (
    <Link
      to="/"
      className={`text-center ${size} font-bold text-blue-600 focus:outline-none focus:ring-0`}
    >
      jordflix
    </Link>
  );
}

export default Logo;
