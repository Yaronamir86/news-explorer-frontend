import React from "react";
import { useContext, useState, createContext } from "react";

const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalState, setModalState] = useState({
    signIn: false,
    signUp: false,
    infoToolTip: false,
    mobile: false,
  });

  const openModal = (modalName) => {
    setModalState({ [modalName]: true });
  };

  const closeModal = () => {
    setModalState(
      Object.keys(modalState).every((key) => (modalState[key] = false))
    );
  };

  return (
    <ModalContext.Provider
      value={{ modalState, setModalState, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};

export { useModal };
