import {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

function Modal({ children }) {
  const [window, setWindow] = useState("");

  const open = (name) => setWindow(name);
  const close = () => setWindow("");

  return (
    <ModalContext.Provider value={{ window, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  function handleOpen() {
    open(opens);
  }

  return cloneElement(children, { onClick: handleOpen });
}

function Window({ children, name }) {
  const { window, close } = useContext(ModalContext);
  const windowRef = useRef();

  function handleOutsideClick(event) {
    const modalWindow = windowRef.current;
    const target = event.target;

    if (modalWindow && !modalWindow.contains(target)) {
      modalWindow.style.left = "-288px";
      setTimeout(() => close(), 300);
    }
  }

  useEffect(
    function () {
      const modalWindow = windowRef.current;

      if (window === name)
        setTimeout(() => {
          modalWindow.style.left = "1px";
        }, 100);
    },
    [window, name],
  );

  if (window === name)
    return createPortal(
      <div
        className="absolute top-0 z-[1000] h-screen w-full backdrop-blur-[1px]"
        onClick={handleOutsideClick}
      >
        <div
          ref={windowRef}
          className="absolute left-[-18rem] h-full border-r-2 border-slate-700 bg-slate-950 text-slate-50 transition-all duration-300 md:w-[15%]"
        >
          {children}
        </div>
      </div>,
      document.body,
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
