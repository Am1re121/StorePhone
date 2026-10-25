import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import Categories from "./components/Categories/Categories.jsx";
import Products from "./components/Products/Products.jsx";
import PhoneDetails from "./components/PhoneDetails/PhoneDetails.jsx";
import Favorite from "./components/Favorite/Favorite.jsx";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
  

function AppContent({ phones, favorites, setFavorites }) {
    const location = useLocation();

    return (
        <>
            {!["/register", "/login"].includes(location.pathname) && <Header />}

            <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<><Categories /><Products phones={phones} favorites={favorites} setFavorites={setFavorites} /></>} />
                <Route path="/phone/:id" element={<PhoneDetails phones={phones} favorites={favorites} setFavorites={setFavorites} />} />
                <Route path="/favorite" element={<Favorite favorites={favorites} setFavorites={setFavorites} />} />
            </Routes>
        </>
    );
}

function App() {

useEffect(() => {
    fetch("http://localhost:3000/api/products")
        .then((res) => res.json())
        .then((data) => {
            setPhones(data)
        })
        .catch((error) => {
            console.error("Ошибка загрузки товаров:", error);
        });
}, []);

useEffect(() => {
    const userId = localStorage.getItem("userId")

    if(!userId) {
        return;
    }

    fetch(`http://localhost:3000/api/favorites/${userId}`)
    .then((res) => {
        if(!res.ok) {
            throw new Error("Не удалось сохранить избранное")
        }
    })
    .then((data) => {
        setFavorites(data);
    })

    .catch((error) => {
console.error("Ошибка");

    })
})

  const [phones, setPhones] = useState([])

  const [favorites, setFavorites] = useState([])

  const [count, setCount] = useState(0)

  return (
    
    <BrowserRouter>
          
        <Routes>
        <Route path="*" element={<AppContent phones={phones} favorites={favorites} setFavorites={setFavorites} />} />
        </Routes>
        
    </BrowserRouter>
  )
}

export default App
