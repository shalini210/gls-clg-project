import React, { useContext } from "react";
import Admincontext from "../../context/Admincontext";

export default function Adminlogout()
{
    
    let admin =  useContext(Admincontext)
    let logout=()=>
    {
        admin.setAdminIsLogin(false)
    }
return(

        <div>
            <p>AdminLogout</p>
            <input type='button' onClick={()=>logout()} value="Logout">
                
            </input>
        </div>
    )
}