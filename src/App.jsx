import { useState } from 'react'
import './App.css'
import Storename from './conponents/Storename/Storename.jsx'
import Products from './conponents/Products/Products.jsx'

function App() {
  const [phones, setPhones] = useState([
    { id: 1, name: 'Phone 11', price: 200, hasInStock: true },
    { id: 2, name: 'Phone 12', price: 300, hasInStock: false },
    { id: 3, name: 'Phone 13', price: 400, hasInStock: true },
    { id: 4, name: 'Phone 14', price: 500, hasInStock: true },
  ])

  return (
    <>
      <Storename />
      <Products phones={phones} />
    </>
  )
}

export default App
