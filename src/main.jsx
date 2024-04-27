import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom'
import cartReducer, { gettotal } from './features/cartSlice.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css'
const store = configureStore({
  reducer: {
    cart:cartReducer
  }
});store.dispatch(gettotal());
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ToastContainer></ToastContainer>
      <Provider store={store}>
        <App></App>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
