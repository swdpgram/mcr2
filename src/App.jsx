import { useState } from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'
import { Home } from './Home'
import { Archive } from './Archive'

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<Home /> } /> 
      <Route path="/archive" element={<Archive />} /> 
    </Routes>
    </>
  )
}

export default App
