import React from 'react'
import {useSelector} from "react-redux"
import LoginR from './LoginR'
import LogoutR from './LogoutR'
export default function HomeR() {
    let islogin = useSelector((state)=>state.userR.islogin)
  return (
    <div>HomeR

        <br></br>
        {islogin?<LogoutR></LogoutR>:<LoginR></LoginR>}
    </div>

  )
}
