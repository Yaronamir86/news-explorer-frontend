import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useModal } from '../../contexts/modalContext';
import '../../blocks/Form.css';

const LoginPopup = () => {

  const modalContext = useModal();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
  };

  return (
    <PopupWithForm
      title="Login"
      name="signin"
      buttonText="sign in"
      redirect="sign up"
      isOpen={modalContext.modalState.signin}
      onClose={modalContext.modalState.signin}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete='true'
          required
        />
        <span className="form__input-error name-input-error"></span>
        <h3 className="form__input-title">Password</h3>
        <input
          id="password-input_type-signin"
          type="password"
          name="password"
          placeholder="Enter password"
          className="form__input"
          minLength="2"
          maxLength="200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete='false'
          required
        />
        <span className="form__input-error about-me-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
};

export default LoginPopup;
