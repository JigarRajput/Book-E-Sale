import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

import Register from './components/Register';
import Login from './components/Login';
import Cart from './components/Cart';
import Listing from './components/Listing'



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Listing />} />
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App;


