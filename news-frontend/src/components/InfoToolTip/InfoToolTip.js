import React from "react";
import { useModal } from "../../contexts/modalContext";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import "./InfoToolTip.css";

const InfoToolTip = () => {
  const modalContext = useModal();


  return (
    <PopupWithForm
    title="Registration successfully completed!"
    name="infoToolTip"
    redirect="sign in"
    isOpen={modalContext.modalState.infoToolTip}
    onClose={modalContext.modalState.infoToolTip}
  >
    </PopupWithForm>
  );
};

export default InfoToolTip;
