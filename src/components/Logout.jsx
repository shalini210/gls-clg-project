import React, { useContext } from 'react'
import userContext from '../context/userContext'
import { useNavigate } from 'react-router'
export default function Logout() {
  let user = useContext(userContext)
  const navigate = useNavigate();
  return (
    <>
    <input type="button" onClick={()=>{user.setloggedin(false)
    navigate("/login")}} value="Logout"/>
    </>
  )
}
