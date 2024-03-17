import { NavLink } from "react-router-dom";
import Modal from "./Modal";
import Logo from "./Logo";

function Sidebar() {
  return (
    <Modal.Window name="sidebar">
      <div className="flex flex-col gap-8 px-8 py-6">
        <Logo />
        <div className="flex flex-col gap-2">
          <NavLink to="/home">Home</NavLink>
          <NavLink to="/movie">Movies</NavLink>
          <NavLink to="/tv">TV Series</NavLink>
        </div>
      </div>
    </Modal.Window>
  );
}

export default Sidebar;
