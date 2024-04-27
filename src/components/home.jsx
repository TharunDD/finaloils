import React from 'react';
import "./home.css"
import Navbar from './spage';
import ProductList from './card';
import Na from './h';
import Pho from './pho';
import Footersp from './footer';
import Footer from './footer';
function Home() {
  return (
  <div>
  <Navbar></Navbar>
  <Pho></Pho>
  <h1 style={{ textAlign: 'center',marginTop:"-8%",marginBottom:"5%"}}>Our poducts</h1>
  <ProductList></ProductList>
  <Footersp></Footersp>
  </div>
  );
}

export default Home;
