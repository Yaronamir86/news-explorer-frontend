import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useModal } from "../../contexts/ModalContext";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import "../../blocks/Form.css";
import  mainApi from "../../utils/MainApi";

const RegisterPopup = () => {
  const modalContext = useModal();
  const {handleRegister} = useLoggedIn()

  const [values, setValues] = React.useState({});

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };
  
 

  function handleSubmit(e) {
    e.preventDefault();
    console.log(values);
    handleRegister(values);
    modalContext.closeModal(RegisterPopup);
    const res =  mainApi.register(values);
    if (!res.message) {
        modalContext.openModal('infoToolTip');
        return;
    }
    console.log("registerd");
  }

  return (
    <PopupWithForm
      title="Register"
      name="signup"
      buttonText="sign up"
      or="or "
      redirect= "sign in"
      isOpen={modalContext.modalState.signup}
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
          autoComplete="true"
          value={values.email || ''}
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
          value={values.password || ''}
          autoComplete="false"
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
          autoComplete="true"
          value={values.name || ''}
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
