import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import store from './store';

import ToastAlertProvider from './ToastAlertProvider';  // <-- your new custom provider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastAlertProvider>
        <App />
      </ToastAlertProvider>
    </Provider>
  </React.StrictMode>
);
