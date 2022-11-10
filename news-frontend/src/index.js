import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import ModalContextProvider from './contexts/modalContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ModalContextProvider>
    <App />
    </ModalContextProvider>
  </React.StrictMode>
);


