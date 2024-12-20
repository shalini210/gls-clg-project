import React from 'react'
import delhi from '../images/delhi.jpg'
export default function Topdestinations() {
  return (<>
    <div className='font-bold text-5xl text-center'>
        Top destinations</div>
<div className='flex flex-col md:flex-row gap-3 md:justify-evenly text-center'>
<div className='h-80 md:w-1/4 md:h-96 bg-[#e2e1e33d]'>
    <img src={delhi} alt="" className='w-4/5 rounded-full aspect-square  mx-auto'/>
    <div className='text-2xl font-semibold '>Delhi</div>
    <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio temporibus dicta magni labore reprehenderit quidem molestias ha
    </p>
    </div>
<div className='h-80 md:w-1/4 md:h-96 bg-green-500'>div2</div>
<div className='h-80 md:w-1/4 md:h-96 bg-blue-500'>div3</div>
</div>
    </>
  )
}
