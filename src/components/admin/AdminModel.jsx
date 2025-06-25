// components/Modal.js
import ReactDOM from "react-dom";

const modalRoot = document.getElementById("portal");

export const AdminModal = ({ children, onClose }) => {
  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 bg-slate-50/70 flex items-center justify-center z-50 "
      onClick={onClose}
    >
      <div className="bg-slate-100 p-6 rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500"
        >
          ✕
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};
