import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IntlProvider, useIntl, FormattedMessage, FormattedNumber} from 'react-intl'
import {messages } from './locales'

type T = "a" | "b";
const x: T  = "a";
const y: string = x;

function App() {
  const intl = useIntl();
  intl.formatMessage({
  })
  return (
    <IntlProvider
     messages={messages['zh']}
     locale="zh"
     defaultLocale="zh">

    <div className="App">
      <FormattedMessage
      id="navbar.lang"
       ></FormattedMessage>
    </div>
    </IntlProvider>
  );
}

export default App;
