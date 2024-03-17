import Hamburger from "./Hamburger";
import Searchbar from "./Searchbar";

function Header() {
  return (
    <div className="flex items-center gap-4">
      <Hamburger />
      <Searchbar />
    </div>
  );
}

export default Header;
