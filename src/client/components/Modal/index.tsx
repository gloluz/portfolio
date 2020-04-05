import React, { useEffect, ReactNode } from "react";
import ReactDOM from "react-dom";
import { ModalContainer, Overlay, ArrowContent } from "./styles";

const modalRoot =
  typeof document !== "undefined" && document?.getElementById("modal-root");

interface ModalProps {
  children: ReactNode;
  onClose: () => any;
}

const Modal = ({ children, onClose }: ModalProps) => {
  const el = typeof document !== "undefined" && document?.createElement("div");

  useEffect(() => {
    if (modalRoot && el) {
      modalRoot?.appendChild(el);
    }

    return () => {
      if (modalRoot && el) {
        modalRoot?.removeChild(el);
      }
    };
  }, []);

  return el ? (
    ReactDOM.createPortal(
      <Overlay className="overlay">
        <ModalContainer>
          {children}
          <ArrowContent onClick={onClose} />
        </ModalContainer>
      </Overlay>,
      el
    )
  ) : (
    <></>
  );
};

export default Modal;
