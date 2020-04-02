import React, { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, Overlay, ArrowContent } from "./styles";

const modalRoot = document.getElementById("modal-root");

interface ModalProps {
  children: ReactNode;
  onClose: () => any;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot?.appendChild(el);

    return () => {
      modalRoot?.removeChild(el);
    };
  }, []);

  return ReactDOM.createPortal(
    <Overlay className="overlay">
      <ModalContainer>
        {children}
        <ArrowContent onClick={onClose} />
      </ModalContainer>
    </Overlay>,
    el
  );
};

export default Modal;
