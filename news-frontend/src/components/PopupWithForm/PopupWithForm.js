import React from "react";
import { useEffect } from "react";
import "./PopupWithForm.css";
import { useModal } from "../../contexts/ModalContext";

const PopupWithForm = (props) => {
  const modalContext = useModal();

  useEffect(() => {
    const isOpen = props.isOpen;
    if (!isOpen) return;

    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        modalContext.closeModal();
        console.log("closed");
      }
    }

    document.addEventListener("keydown", handleEscClose);

    return () => {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [props.isOpen, modalContext]);

  const handleRedirect = () => {
    const goToPopup = props.name === "signin" ? "signup" : "signin";
    modalContext.closeModal();
    modalContext.openModal(goToPopup);
  };

  return (
    <div
      className={`modal modal_type_${props.name} ${
        props.isOpen ? "modal_opened" : ""
      }`}
    >
      <div className="modal__container">
        <button
          className="modal__close-btn"
          type="button"
          aria-label="close"
          onClick={modalContext.closeModal}
        />
        <form
          action="submit"
          className="form"
          name={props.name}
          autoComplete="off"
          onSubmit={props.onSubmit}
        >
          <h2 className="form__title">{props.title}</h2>
          {props.children}
          <button
            className="modal__button"
            type="submit"
            onClick={props.submit}
          >
            {props.buttonText}
          </button>
          <p className= "modal__redirect">
            {props.or}
            <button
              className="modal__redirect-button"
              type="button"
              onClick={handleRedirect}
            >
              {props.redirect}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
