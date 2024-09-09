import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import persistStore from 'redux-persist/es/persistStore';
import store from './redux/store';
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import {Provider} from "react-redux"



let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);