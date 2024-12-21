import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Topdestinations from './components/Topdestinations'
import Description from './components/Description'
import {Routes,Route } from "../node_modules/react-router-dom"

function App() {
 
  return (
  <>
  <Menu></Menu>
  <Routes>
    <Route path='/' element={<Topdestinations></Topdestinations>}></Route>
    <Route path="/details" element={<Description></Description>} ></Route>
    </Routes>
  
  {/* <Topdestinations></Topdestinations> */}
  </>
  )
}

export default App
