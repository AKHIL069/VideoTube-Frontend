import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import Login from './components/Login/Login'
import Signup from './components/Signup/Signup'
import LikedVideo from './components/LikedVideo/LikedVideo'

function App() {

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/liked-videos" element={<LikedVideo />} />
      </Route>
    </Routes>
  )
}

export default App
