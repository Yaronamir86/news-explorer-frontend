import React from 'react'
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const LoginPopup = ({isOpen, onClose, onSubmit}) => {

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit({ email, password });
  };

  return (
    <PopupWithForm
      title="Sign in"
      name="Login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
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
        <input
          id="about-me-input"
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
      </fieldset>
    </PopupWithForm>
  );
};

export default LoginPopup;
