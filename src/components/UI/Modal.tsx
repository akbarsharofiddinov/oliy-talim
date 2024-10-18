import React from "react";
interface IProps {
  children: React.ReactNode;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ children, setModal }) => {
  return (
    <>
      <div className="modal">
        <div className="modal-inner">
          {children}
          <button className="close-btn" onClick={() => setModal(false)}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
