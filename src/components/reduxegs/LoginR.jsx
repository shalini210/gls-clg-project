import React, { useRef } from 'react'
import {useDispatch} from "react-redux"
import { login } from '../../slices/userSlice'
export default function LoginR() {
    // let islogin = useSelector((state)=>state.userR.islogin)
    let nameref = useRef("")
    let pwdref = useRef("")
let dispatch = useDispatch()
    let chk =()=>
    {
        if(nameref.current.value =="admin" && pwdref.current.value=="123")
        {
            dispatch(login())
        }
    }
  return (
    <div>LoginR:
        <input type="text"  placeholder='enter name'
        ref={nameref}/>
        
        <input type="text" placeholder='password' ref={pwdref}/>
        <input type="button" value="login" onClick={()=>chk()} />
    </div>
  )
}
