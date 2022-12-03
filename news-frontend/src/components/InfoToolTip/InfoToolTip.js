import React from "react";
import { useModal } from "../../contexts/ModalContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./InfoToolTip.css";

const InfoToolTip = () => {
  const modalContext = useModal();
 

  return (
    <PopupWithForm
      title="Registration successfully completed!"
      name="infoToolTip"
      redirect="sign in"
      or=""
      isOpen={modalContext.modalState.infoToolTip}
      onClick={modalContext.modalState.infoToolTip}
    ></PopupWithForm>
  );
};

export default InfoToolTip;
