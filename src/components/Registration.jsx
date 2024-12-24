import React, { useRef, useState } from 'react'
import axios from "axios"
export default function Registration() {
    let nameref = useRef("")
    let emailref = useRef("")
    let contactref = useRef("")
    let pwdref = useRef("")
    const [msg,setmsg]= useState("")
    const addUser=async()=>
    {
        let data = {username:nameref.current.value,
            email:emailref.current.value,
            pwd:pwdref.current.value,
            contactno:contactref.current.value}
       await axios.post("http://localhost:8080/users",data)
        .then((d)=>{
            setmsg(d.data)
            empty()
        })
        .catch((d)=>setmsg("error"))
    } 
    const empty = ()=>
    {
        nameref.current.value=""
        emailref.current.value=""
        pwdref.current.value=""
        contactref.current.value=""
    }
  return (
    <div className='w-1/2 mx-auto'>
    <div className='text-center '>Registration Form</div>
    <div className='grid grid-col-1 gap-5'>
        
    <input type="text" ref={nameref} placeholder='Name' className='textbox'/>
    <input type="text" ref={emailref} placeholder='Email' className='textbox'/>

    <input type="text" ref={pwdref} placeholder='Password' className='textbox'/>

    <input type="text" ref={contactref} placeholder='contact no ' className='textbox'/>

    <input type="button" value="Register" onClick={()=>addUser()}/>
    <input type="button" value="Cancel" onClick={()=>empty()}/>
    {msg}
    </div>
    </div>
  )
}
