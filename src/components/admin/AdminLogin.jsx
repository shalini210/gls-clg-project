import React, { useContext, useRef } from 'react'
import Admincontext from '../../context/Admincontext';

export default function AdminLogin() {
  let usernameRef = useRef("");
  let pwdref = useRef("");
  let admin = useContext(Admincontext)
  let login = ()=>
  {
    if(usernameRef.current.value=="admin"
     && pwdref.current.value=="123456")
     {
      admin.setAdminIsLogin(true)
     }
  } 
  let cancel = ()=>
  {
    usernameRef.current.value="";
    pwdref.current.value = "";
  }
  return (
    <div>
    <div>AdminLogin</div>
    <p>UserName: <input type="text" ref={usernameRef}/></p>
    <p>PAssword : <input type="text"  ref={pwdref}/></p>
    <p><input type="button" value="Login" onClick={()=>login()}/></p>
    <p><input type="button" value = "cancel" 
    onClick={()=>cancel()}/></p>
    </div>
  )
}
