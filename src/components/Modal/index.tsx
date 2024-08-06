import React from "react";

export interface ModalProps {
  modal: {
    poolID: string;
    name: string;
    description: string;
    external_url: string;
  };
  show: boolean;
  handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ modal, show, handleClose }) => {
  if (!show) return;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-zinc-50 p-6 rounded-lg w-full max-w-lg">
        <div className="flex justify-between items-center mb-3">
          <h2 className="">Pool ID: {modal.poolID}</h2>
          <button onClick={() => handleClose()}>
            <span>X</span>
          </button>
        </div>
        <label>Name</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          value={modal.name}
          disabled
        />
        <label>Description</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          value={modal.description}
          disabled
        />
        <label>External URL</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded mb-3"
          value={modal.external_url}
          disabled
        />
      </div>
    </div>
  );
};

export default Modal;
