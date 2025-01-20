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
import Home from './components/Home'
import UserProfile from './components/UserProfile'
import userContext from './context/userContext'
import Logout from './components/Logout'
import Demo from './components/Demo'
import userProfile from './context/userProfile'
import Adminhome from './components/admin/Adminhome'
import Admincontext from './context/Admincontext'
import Countereg from './components/reduxegs/Countereg'
import HomeR from './components/reduxegs/HomeR'
function App() {
  const[isloggedinstate,setisloggeedinstate]= useState(false)
 const[userdetails,setuserdetails]= useState({});
  return (
  <>
  
      <userContext.Provider value={{isloggedin:isloggedinstate,setloggedin:setisloggeedinstate}}>
  <userProfile.Provider value={{userdetails: userdetails,setuserdetails:setuserdetails}}>
  <Menu></Menu>
  <Routes>
    <Route path="/forredux" element={<HomeR></HomeR>}></Route>
    <Route path='/adminhome' element={<Adminhome></Adminhome>}></Route>
    <Route path='/demo' element={<Demo></Demo>}></Route>
    <Route path='/profile' element={<UserProfile></UserProfile>}></Route>
    <Route path='/logout' element={<Logout></Logout>}></Route>
    <Route path='/home' element={<Home></Home>}></Route>
    {/* <Route path='/' element={<AddDestination></AddDestination>}></Route> */}
    <Route path="/details" element={<Description></Description>} ></Route>
    <Route path="/packages" element={<Packages></Packages>}></Route>
    <Route path="/register" element={<Registration></Registration>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    </Routes>
    </userProfile.Provider>  
    </userContext.Provider>
  {/* <Topdestinations></Topdestinations> */}
  </>
  )
}

export default App
