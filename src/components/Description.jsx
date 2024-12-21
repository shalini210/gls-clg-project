import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Description(props) {
    const location = useLocation()
    const place = location.state.place
//   console.log(placename)
    return (

    <>
    <div className=' bg-blue-500 w-1/2 
    italic hover:shadow-2xl hover:shadow-red-600'>  
    {place.name}
    {/* <div className='text-3xl font-bold'>{props.place.placename} </div> */}
    <div>{place.state}</div>
    <p className=' leading-7 tracking-wider'>
   {place.des}
   </p>
    <input type="button" value="book" className=' w-24 h-12
     hover:shadow-xl hover:shadow-slate-200
    border-2 my-4 ml-4 bg-sky-300 hover:bg-slate-900
     hover:text-white '/>
    
    </div></>

  )
}
