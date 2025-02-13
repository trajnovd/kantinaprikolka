import {
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutsideClick } from "../hooks/UseOutsideClick";
import PropTypes from "prop-types";

const ModalContext = createContext(); // ✅ Correctly create and export context

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = (name) => setOpenName(name);

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);
  return cloneElement(children, { onClick: () => open(opens) });
}

Open.propTypes = {
  children: PropTypes.node.isRequired,
  opens: PropTypes.string.isRequired,
};
function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-transparent backdrop-blur-lg z-50 flex justify-center
        items-center transition-all"
    >
      <div
        ref={ref}
        className="relative bg-[#77846E] text-white rounded-lg shadow-lg p-8 w-full
          max-w-md transition-transform"
      >
        {/* Close Button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 text-white hover:text-[#EFE8D8] transition-all"
        >
          <HiXMark className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body,
  );
}

Window.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
};

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
