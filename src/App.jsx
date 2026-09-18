import { useState } from 'react'
import './App.css'
import Storename from './conponents/Storename/Storename.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Storename />
    </>
  )
}

export default App
