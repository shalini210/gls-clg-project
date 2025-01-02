import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import userProfile from '../context/userProfile';
import { useContext } from 'react';
import moment from 'moment';
export default function UserProfile() {

  const userdetail = useContext(userProfile)
  let bloodTyperef = useRef()
  let addressref = useRef()
  let occupationref = useRef()
  const dateref = useRef("");
   //" id of the person who logged in "
   useEffect(()=>
   {
console.log(userdetail.userdetails[0]._id)
bloodTyperef.current.value = userdetail.userdetails[0].bloodType
occupationref.current.value = userdetail.userdetails[0].occupation
console.log( (userdetail.userdetails[0].dob))
dateref.current.value = 
moment(userdetail.userdetails[0].dob).utc().format('YYYY-MM-DD')
addressref.current.value= userdetail.userdetails[0].address

   },[])
  const addProfile= () =>{
   let data={
    userid: userdetail.userdetails[0]._id,
      bloodType:bloodTyperef.current.value,
      occupation:occupationref.current.value,
      address:addressref.current.value,
      dob:dateref.current.value
    }
    axios.put("http://localhost:8080/users/profile/",data)
    .then((d)=>console.log(d.data))
    .catch((e)=>console.log(e))
  }

  let fordate = ()=>
  {

    const dt = new Date
    let startyear = dt.getFullYear()-60
    let endyear = dt.getFullYear() -18
console.log(endyear)
    const dp = dateref.current
  // dp.setAttribute('min', '2024-03-15');
  dp.setAttribute('min', startyear+'-01-01');
  dp.setAttribute('max', endyear+'-12-31');
  
  const minDate = dp.getAttribute('min');
  const maxDate = dp.getAttribute('max');
  }
  return (
    <>
    <div>UserProfile</div>
    <div>Add profile details</div>
    <p>DOB: <input type="date" ref={dateref}
     onFocus={()=>fordate()}/>
    </p>
    <p>HOME Address: <textarea ref={addressref}></textarea>
    </p>
    <p>
    OCCUpation: <input type="text" ref={occupationref}></input>
    </p>
    <p>
    BLOOD GROUP: <select ref={bloodTyperef}>
      
    <option>A Positive</option>
    <option>A Negative</option>
    <option>A Unknown</option>
    <option>B Positive</option>
    <option>B Negative</option>
    <option>B Unknown</option>
    <option>AB Positive</option>
    <option>AB Negative</option>
    <option>AB Unknown</option>
    <option>O Positive</option>
    <option>O Negative</option>
    <option>O Unknown</option>
    <option>Unknown</option>
</select>
</p>
<input type="button" className='bg-blue-500' value="Save" onClick={()=>addProfile()} />
    </>

  )
}
