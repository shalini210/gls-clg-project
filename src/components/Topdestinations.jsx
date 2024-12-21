import React from 'react'
import delhi from '../images/delhi.jpg'
import { Link } from 'react-router-dom'
export default function Topdestinations() {
  const TD =[
    {id:1,name:"Delhi",state:"Delhi" ,des:"description of delhi"},
    {id:2,name:"Mumbai",state:"Mah" ,des:"description of Mumbai"},
    {id:3,name:"Agra",state:"UP" ,des:"description of AGRA"},
    {id:4,name:"Somnath",state:"GUJARAT" ,des:"description of Somnath"},
  ]
  let TDUI = TD.map((D)=>
  {
    return(
      <div className='h-80 md:w-1/4 md:h-96 bg-[#e2e1e33d]'>
    <img src={delhi} alt="" className='w-4/5 rounded-full aspect-square  mx-auto'/>
    <div className='text-2xl font-semibold '>{D.Name}</div>
    <div className='text-xl font-semibold'>{D.state}</div>
    <p>
       {D.D}
    </p>
    {/* <Link to=
  {{
    pathname:'/details',
    placename:'delhi'}}>View </Link> */}
    <Link to="/details" state={{place:D}}>View Details</Link>
    </div>
    )
  })
  return (<>
    <div className='font-bold text-5xl text-center'>
        Top destinations</div>
<div className='flex flex-col md:flex-row gap-3 md:justify-evenly text-center'>

{TDUI}</div>
    </>
  )
}
