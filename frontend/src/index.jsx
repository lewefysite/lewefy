import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'; // IMPORTADO
import { store } from './store';
import App from './App';
import './tailwind.css'; // Tailwind importado aqui

const recaptchaSiteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY; // Lendo a chave do .env

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
	</GoogleReCaptchaProvider>
  </React.StrictMode>
);
