import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing';
import Payment from './components/pages/Payment/Payment';
import Orders from './components/pages/Orders/Orders';
import SignIn from './components/pages/Auth/signup';
import Cart from './components/pages/Cart/Cart';

function Routing() {
  return (
   <Router>
     <Routes>
      <Route path="/" element={<Landing/>} />
      <Route path="/auth" element={<SignIn/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/cart" element={<Cart/>} />
    </Routes>
   </Router>

  )
}

export default Routing