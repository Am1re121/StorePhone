import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Products from "./components/Products/Products.jsx";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails.jsx";

import iphone11 from "./assets/iphone11.png";
import iphone12 from "./assets/iphone12.png";
import iphone13 from "./assets/iphone13.png";
import iphone14 from "./assets/iphone14.png";
import iphone15 from "./assets/iphone15.png";
import iphone16 from "./assets/iphone16.png";


function App() {
  const [phones, setPhones] = useState([
    { id: 1, img:iphone11, name: 'Phone 11 Purple 128GB ', price: 200, hasInStock: true, description: "6.1-inch display, 128GB storage, great camera" },
    { id: 2, img:iphone12, name: 'Phone 12 Orange 256GB', price: 300, hasInStock: false, description: "6.1-inch display, 256GB storage, great camera" },
    { id: 3, img:iphone13, name: 'Phone 13 White 256GB', price: 400, hasInStock: true, description: "6.1-inch display, 256GB storage, great camera" },
    { id: 4, img:iphone14, name: 'Phone 14 Gray. 512GB', price: 500, hasInStock: true, description: "6.1-inch display, 512GB storage, great camera" },
    { id: 5, img:iphone15, name: 'Phone 15 White 256GB', price: 600, hasInStock: false, description: "6.1-inch display, 256GB storage, great camera" },
    { id: 6, img:iphone16, name: 'Phone 16 Green 512GB', price: 700, hasInStock: true, description: "6.1-inch display, 512GB storage, great camera" },
  ])

  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
           <Header/>

        <Routes>
        <Route path="/" element={<><Categories/><Products phones={phones}/></>} />
        <Route path="/phone/:id" element={<PhoneDetails phones={phones}/>} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
