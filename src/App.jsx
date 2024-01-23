import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Event from './pages/Event'
import Stream from './pages/Stream'
import Sports from './pages/Sports'
function App() {

  return (
    <div className='w-full h-full p-4'>
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event" element={<Event />} />
        <Route path="/stream" element={<Stream />} />
        <Route path="/sports" element={<Sports />} />
      </Routes>
      <Navbar />
    </div>
  )
}

export default App
