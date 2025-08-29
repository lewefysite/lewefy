// File: src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

import { store } from './store';              // Ajuste se seu store estiver em outro lugar
import App from './App.jsx';
import './assets/styles/tailwind.css';        // Confirme o caminho correto do seu tailwind.css

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaSiteKey}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);
