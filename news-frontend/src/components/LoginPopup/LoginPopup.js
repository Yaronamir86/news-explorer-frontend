import React from "react";
import PopupWithForm from "../PopupWithForm/PopupWithForm";
import { useModal } from "../../contexts/ModalContext";
import { useLoggedIn } from "../../contexts/LoggedInContext";
import { useValidateForm } from "../../hooks/useForm";
import "../../blocks/Form.css";

const LoginPopup = () => {
  const modalContext = useModal();
  const { handleLogin, loggedInError } = useLoggedIn();
  const { values, handleChange, errors, isValid, resetForm } =
    useValidateForm();

  function handleSubmit(e) {
    e.preventDefault();
    if (!values.email || !values.password) {
      return;
    }
    modalContext.closeModal(LoginPopup);
    handleLogin(values);
    resetForm();
    console.log(values);
  }

  return (
    <PopupWithForm
      title="Login"
      name="signin"
      buttonText="sign in"
      or="or "
      redirect="sign up"
      isOpen={modalContext.modalState.signin}
      onSubmit={handleSubmit}
      onChange={handleChange}
      isValid={isValid}
      loggedInError={loggedInError}
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
          value={values.email || ""}
          onChange={handleChange}
          autoComplete="true"
          required
        />
        <span className="form__input-error email-input-error">
          {errors.email}
        </span>
        <h3 className="form__input-title">Password</h3>
        <input
          id="password-input_type-signin"
          type="password"
          name="password"
          placeholder="Enter password"
          className="form__input"
          minLength="2"
          maxLength="200"
          value={values.password || ""}
          onChange={handleChange}
          autoComplete="false"
          required
        />
        <span className="form__input-error password-input-error">
          {errors.password}
        </span>
        <span className="form__input-error form__input-error_type-general"></span>
      </fieldset>
    </PopupWithForm>
  );
};

export default LoginPopup;
