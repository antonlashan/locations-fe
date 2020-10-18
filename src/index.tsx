import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { LOCALE } from './helpers/config';
import * as serviceWorker from './serviceWorker';

const loadLocaleData = (locale: string) => {
  switch (locale) {
    case 'nl':
      return import('./i18n/compiled-lang/nl.json');
    default:
      return import('./i18n/compiled-lang/en.json');
  }
};

async function bootstrapApplication(locale: string) {
  const messages = await loadLocaleData(locale);
  ReactDOM.render(
    <React.StrictMode>
      <App locale={locale} messages={messages.default} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

bootstrapApplication(LOCALE);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
