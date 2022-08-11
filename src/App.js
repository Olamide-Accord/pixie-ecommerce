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
import SingleProduct from './Pages/SingleProduct';
import TopScoll from './Components/TopScroll';
import Signup from './Pages/Signup';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <TopScoll/>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/:index' element={<SingleProduct/>}/>
          <Route path='/contact' element={<Contact/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/sign-up' element={<Signup/>}/>
        </Routes>
        <Subscribe/>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App