import React, { useState } from 'react'
import Admincontext from '../../context/Admincontext'
import { Router } from 'react-router'
import AdminMenu from './AdminMenu';
import AdminLogin from './AdminLogin';

export default function Adminhome() {
  const [adminIsLogin,setAdminIsLogin] = useState(false);
  return (
    <>
    
   <Admincontext.Provider value={{adminIsLogin:adminIsLogin,
    setAdminIsLogin:setAdminIsLogin}}>
    {adminIsLogin?<AdminMenu></AdminMenu>:<AdminLogin></AdminLogin>}
   </Admincontext.Provider>
    </>
  )
}
