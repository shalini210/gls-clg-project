import React, { useRef } from 'react'
import axios from 'axios';
export default function AddDestination() {
    let nameref = useRef("");
    let imgref = useRef("");
    const AddData=()=>
    {   const config = {headers: {'Content-Type': 'multipart/form-data'}}

     
        const place ={name:nameref.current.value,resume:imgref.current.files[0]}
        axios.post("http://localhost:8080/forposthandle",place,config,
        ).then((d)=>console.log(d))
    }
  return (<>
      <div>AddDestination:</div>
      <div>
        <label>Name</label>
        <input type="text" ref={nameref}/>
        <br></br>
        <label>Upload Image</label>
        <input type="file" ref={imgref}/>
        <input type="button" value="Save" onClick={()=>AddData()} />
      </div>
      </>
  )
}
