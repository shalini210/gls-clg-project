import axios from 'axios'
import React, { useRef } from 'react'
import { APIUrl } from '../../config'
export default function AddCamp() {
    let campref = useRef("")
    let placeref = useRef("")
    let dateref = useRef("")
    let timeref = useRef("")
    let maxdonorsref = useRef("")
        
    let addCamp=()=>
    {
        let data = { campname:campref.current.value,
            place :placeref.current.value,
            date:dateref.current.value,
            time:timeref.current.value,
            maxdonors:maxdonorsref.current.value,
        }
        axios.post(`${APIUrl}/camp`,data)
        .then((d)=>
        {
            console.log(d)
        })
        .catch((e)=>console.log(e))
    }
  return (
    <div>
        <h1>AddCamp</h1>
        <p>
            campName : <input type="text"  ref={campref}/>
        </p>
<p>Place<input type="text" ref={placeref} />
</p>
<p>Date <input type="date" ref={dateref} /></p>
<p>
    Time : <input type="time" ref={timeref} />
</p>
<p>
    max Donors <input type="number" ref={maxdonorsref}/>
</p>
<input type="button" value="Add " onClick={()=>addCamp()} />
    </div>
  
    

  )
}
