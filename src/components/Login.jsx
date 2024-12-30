import React, { useContext, useRef, useState } from 'react'
import axios from "axios"
import userContext from '../context/userContext'

export default function Login() {
  let user = useContext(userContext)
    let emailref = useRef("")
    let pwdref = useRef("")
    const [msg,setmsg]= useState("")

    const loginUser=async()=>
    {
        let data = {
            email:emailref.current.value,
            pwd:pwdref.current.value,
        }
       await axios.post("http://localhost:8080/users/login",data)
        .then((d)=>{
            setmsg(JSON.stringify(d.data))
            user.setloggedin(true)
            empty()
        })
        .catch((d)=>setmsg("error"))
    } 
    const empty = ()=>
    {
        emailref.current.value=""
        pwdref.current.value=""        
    }


  return (
    (
        <div className='w-1/2 mx-auto'>
        <div className='text-center '>Login</div>
        <div className='grid grid-col-1 gap-5'>
            
        <input type="text" ref={emailref} placeholder='Email' className='textbox'/>
    
        <input type="text" ref={pwdref} placeholder='Password' className='textbox'/>
    
       
        <input type="button" value="Login" onClick={()=>loginUser()}/>
        <input type="button" value="Cancel" onClick={()=>empty()}/>
        {msg}
        </div>
        </div>
        // <div onClick={loginuser(23,432)}></div>
      )
  )
}
