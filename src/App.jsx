import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Routes } from 'react-router-dom'

const App = () => {
  return (
    <Routes>
      <Navbar/>
      <Home/>
    </Routes>
  )
}

export default App
