import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useModal } from "../../contexts/ModalContext";
import "../../blocks/Form.css";

const LoginPopup = () => {
  const modalContext = useModal();

  const [userData, setUserData] = React.useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    modalContext.closeModal(LoginPopup);
    console.log(userData);
  }

  return (
    <PopupWithForm
      title="Login"
      name="signin"
      buttonText="sign in"
      redirect="sign up"
      isOpen={modalContext.modalState.signin}
      onClick={modalContext.modalState.signin}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <h3 className="form__input-title">Email</h3>
        <input
          id="email-input_type-signin"
          type="email"
          name="email"
          placeholder="Enter email"
          className="form__input"
          minLength="2"
          maxLength="40"
          value={userData.email || ""}
          onChange={handleChange}
          autoComplete="true"
          required
        />
        <span className="form__input-error email-input-error"></span>
        <h3 className="form__input-title">Password</h3>
        <input
          id="password-input_type-signin"
          type="password"
          name="password"
          placeholder="Enter password"
          className="form__input"
          minLength="2"
          maxLength="200"
          value={userData.password || ""}
          onChange={handleChange}
          autoComplete="false"
          required
        />
        <span className="form__input-error password-input-error"></span>
        <span className="form__input-error form__input-error_type-general"></span>
      </fieldset>
    </PopupWithForm>
  );
};

export default LoginPopup;
