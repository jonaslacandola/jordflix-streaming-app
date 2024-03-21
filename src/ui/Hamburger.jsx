import { HiBars3 } from "react-icons/hi2";
import Modal from "./Modal";

function Hamburger() {
  return (
    <Modal.Open opens="sidebar">
      <button className="text-2xl md:text-3xl">
        <HiBars3 />
      </button>
    </Modal.Open>
  );
}

export default Hamburger;
