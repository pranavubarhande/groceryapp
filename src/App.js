import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';

import {Routes, Route} from 'react-router-dom';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </>
    // <div>
      
    //   <Home></Home>
      
    // </div>
  );
}

export default App;
