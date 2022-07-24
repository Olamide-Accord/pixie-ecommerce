import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Account from "./Pages/Account"
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Home from './Pages/Home';
import Navbar from "./Components/Navbar"
import Products from "./Pages/Products";
import Subscribe from "./Components/Subscribe"
import Cart from './Pages/Cart';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Subscribe/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App