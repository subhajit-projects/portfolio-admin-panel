import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import './App.css';
import { Flip, ToastContainer } from 'react-toastify';
//require('dotenv').config();

function App() {

  return (
    <BrowserRouter>
      <AppRoutes />
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Flip}/>
    </BrowserRouter>
  );
}

export default App;
