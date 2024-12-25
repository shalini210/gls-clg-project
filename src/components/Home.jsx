import React, { useContext, useState } from 'react'
import userContext from '../context/userContext'
import Login from './Login'
import Logout from './Logout'
export default function Home() {
  let user = useContext(userContext)  
  return (
    
          <div>Home
    
        {user.isloggedin?<Logout></Logout>:<Login></Login>}
    
    </div>
  )
}
