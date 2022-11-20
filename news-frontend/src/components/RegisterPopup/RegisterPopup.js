import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useModal } from "../../contexts/ModalContext";
import "../../blocks/Form.css";

const RegisterPopup = () => {
  const modalContext = useModal();

  const [userData, setUserData] = React.useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUserData({ ...userData, [name]: value });
  };
  
 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    modalContext.closeModal(RegisterPopup);
  }

  return (
    <PopupWithForm
      title="Register"
      name="signup"
      buttonText="sign up"
      redirect="sign in"
      isOpen={modalContext.modalState.signup}
      onClose={modalContext.modalState.signup}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <h3 className="form__input-title">Email</h3>
        <input
          id="email-input"
          type="email"
          name="email"
          placeholder="Enter email"
          className="form__input"
          minLength="2"
          maxLength="40"
          value={userData.email || ''}
          onChange={handleChange}
          required
        />
        <span className="form__input-error email-input-error"></span>
        <h3 className="form__input-title">Password</h3>
        <input
          id="password-input"
          type="password"
          name="password"
          placeholder="Enter password"
          className="form__input"
          minLength="2"
          maxLength="200"
          value={userData.password || ''}
          onChange={handleChange}
          required
        />
        <span className="form__input-error password-input-error"></span>
        <h3 className="form__input-title">Username</h3>
        <input
          id="userName-input"
          type="name"
          name="name"
          placeholder="Enter your username"
          className="form__input"
          minLength="2"
          maxLength="40"
          value={userData.name || ''}
          onChange={handleChange}
          required
        />
        <span className="form__input-error name-input-error"></span>
        <span className="form__input-error form__input-error_type-general"></span>
      </fieldset>
    </PopupWithForm>
  );
};

export default RegisterPopup;
