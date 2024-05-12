import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import 'react-toastify/ReactToastify.css'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { store } from './store/store.js'
import { PersistGate } from 'redux-persist/integration/react';
import persistor from './store/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor }>
    <App />
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
