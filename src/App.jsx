import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home';
import About from './components/about';
import Cont from './components/contact';
import SingleProduct from './components/singlepage';
import ContactForm from './components/contact';
import ShoppingCart from './components/cart';
import ProductList from './components/card';
import Pho from './components/pho';
import Sigg from './components/siginin';
import Logg from './components/login';
import Order from './components/order';
import AdminDashboard from './components/AdminDashboard';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/n" element={<About/>}/>
      <Route path="/co" element={<Pho/>}/>
      <Route path="/ca" element={<ProductList/>}/>
      <Route path="/cc" element={<ContactForm/>}/>
      <Route path="/c" element={<SingleProduct/>}/>
      <Route path="/cop" element={<ShoppingCart/>}/>
      <Route path="/sig" element={<Sigg></Sigg>}/>
      <Route path="/log" element={<Logg></Logg>}/>
      <Route path="/orders" element={<Order></Order>}/>
      <Route path="/admin" element={<AdminDashboard></AdminDashboard>}/>
   </Routes>
  );
  }
export default App;