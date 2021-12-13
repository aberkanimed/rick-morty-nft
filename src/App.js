import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home"
import Episodes from "./Pages/Episodes"
import Locations from "./Pages/Locations"
import ShoppingCart from "./Pages/ShoppingCart";

function App() {
  let [cartItems, setCartItems] = useState([]);
  let [subtotal, setSubtotal] = useState(0);

  const addToCart = (newItem) => {
    const checkNewitemExist = (element) => element.id === newItem.id;
    if(!cartItems.some(checkNewitemExist)) {
      let sum = 0;
      newItem["price"] = Number.parseFloat(Math.floor(Math.random() * 300) + 1).toFixed(2);
      const updatedCartItems = [...cartItems, newItem];
      updatedCartItems.forEach((item) => {
          sum += Number.parseInt(item.price);
      })
      setCartItems(updatedCartItems);
      setSubtotal(Number.parseFloat(sum).toFixed(2));
    }
  }

  const removeItem = (item) => {
    let sum = 0;
    const updatedCartItems = cartItems.filter((value) => {
      return value.id !== item.id;
    });
    updatedCartItems.forEach((item) => {
      sum += Number.parseInt(item.price);
    })
    setCartItems(updatedCartItems);
    setSubtotal(Number.parseFloat(sum).toFixed(2));
  }

  return (
    <Router>
      <div className="App">
        <Navbar totalItems={cartItems.length}/>
      </div>
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/episodes" element={<Episodes addToCart={addToCart} />} />
        <Route path="/locations" element={<Locations addToCart={addToCart} />} />
        <Route path="/cart" element={<ShoppingCart cartItems={cartItems} removeItem={removeItem} subtotal={subtotal} />} />
      </Routes>
    </Router>
  )
}

export default App;
