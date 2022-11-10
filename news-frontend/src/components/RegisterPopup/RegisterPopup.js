import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import { useModal } from '../../contexts/modalContext';
import '../../blocks/Form.css';

const RegisterPopup = () => {

  const modalContext = useModal();

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
  };

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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <span className="form__input-error name-input-error"></span>
        <h3 className="form__input-title">Password</h3>
        <input
          id="password-input"
          type="password"
          name="password"
          placeholder="Enter password"
          className="form__input"
          minLength="2"
          maxLength="200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <span className="form__input-error about-me-input-error"></span>
        <h3 className="form__input-title">Username</h3>
        <input
          id="userName-input"
          type="name"
          name="name"
          placeholder="Enter your username"
          className="form__input"
          minLength="2"
          maxLength="40"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <span className="form__input-error name-input-error"></span>
      </fieldset>
    </PopupWithForm>
  );
};

export default RegisterPopup;
