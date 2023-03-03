import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { App } from './App';
import { GlobalStyle } from './Components/GlobalStyle';
import { fetchWorks } from './utils/getWorks';
import './i18n';
import CookieConsent from 'react-cookie-consent';
import 'swiper/css';

await fetchWorks();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <GlobalStyle />
      <App />
    </HashRouter>
    <CookieConsent
      location='bottom'
      cookieName='myAwesomeCookieName3'
      enableDeclineButton
      expires={999}
      overlay
      buttonText='Accept'
      declineButtonText='Set Cookies'
      style={{ background: 'black', color: 'white' }}
      buttonStyle={{ background: 'white', color: 'black' }}
      declineButtonStyle={{
        background: 'black',
        color: 'white',
        textDecoration: 'underline',
      }}
    >
      This website uses cookies to enhance the user experience. We'll assume
      you're with this, but you can opt-out if you wish.
    </CookieConsent>
  </React.StrictMode>
);
