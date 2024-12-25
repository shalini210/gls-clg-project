import React, { useContext } from 'react'
import userContext from '../context/userContext'

export default function Logout() {
  let user = useContext(userContext)
  return (
    <>
    <input type="button" onClick={()=>user.setloggedin(false)} value="Logout"/>
    </>
  )
}
