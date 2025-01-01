import axios from 'axios';
import React, { useRef } from 'react'

export default function UserProfile() {

  let bloodTyperef = useRef()
  let addressref = useRef()
  let occupationref = useRef()
  const dateref = useRef("");
  let id = "676a3b219f340af07ee48c5e" //" id of the person who logged in "
  const addProfile= () =>{
   let data={
    userid: id,
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
    DOB: <input type="date" ref={dateref} onFocus={()=>fordate()}/>
    HOME Address: <textarea ref={addressref}></textarea>
    OCCUpation: <input type="text" ref={occupationref}></input>
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
<input type="button" value="Add" onClick={()=>addProfile()} />
    </>

  )
}
