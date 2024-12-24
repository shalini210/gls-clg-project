import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menu from './components/Menu'
import Topdestinations from './components/Topdestinations'
import Description from './components/Description'
import {Routes,Route } from "../node_modules/react-router-dom"
import AddDestination from './components/AddDestination'
import Packages from './components/Packages'
import Registration from './components/Registration'
import Login from './components/Login'

function App() {
 
  return (
  <>
  <Menu></Menu>
  <Routes>
    <Route path='/' element={<AddDestination></AddDestination>}></Route>
    <Route path="/details" element={<Description></Description>} ></Route>
    <Route path="/packages" element={<Packages></Packages>}></Route>
    <Route path="/register" element={<Registration></Registration>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
  
  {/* <Topdestinations></Topdestinations> */}
  </>
  )
}

export default App
