import React from 'react'
import { logout } from '../../slices/userSlice'
import {useDispatch} from "react-redux"
export default function LogoutR() {
    let dispatch = useDispatch()
  return (
    <div>
        <input type="button" value="Logout" 
        onClick={()=>dispatch(logout())}/>
        </div>
  )
}
