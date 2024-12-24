import React from 'react'

export default function Packages() {
  return (
    <>    <div>Packages</div>
    <div className='grid grid-cols-6 w-4/5 mx-auto'>
    <div className='bg-red-200'> 1</div>
    <div className='bg-blue-200'> 1</div>
    <div className='bg-green-200'> 1</div>
    <div className='bg-orange-200'> 1</div>
    <div className='bg-purple-200'> 1</div>
    <div className='bg-blue-200'> 1</div>
    </div>
    <div className='grid grid-cols-6 w-4/5 mx-auto'>
    <div className='col-span-2 bg-purple-500'>1</div>
    
    <div className='col-span-2 col-start-5 bg-purple-500'>2</div>
    </div>
    <div className='grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3
    gap-5 w-4/5 mx-auto text-center '>
        <div className='bg-blue-400'>1</div>
        <div className='bg-blue-400'>2</div>
        <div className='bg-blue-400'>3</div>
        <div className='bg-blue-400 col-span-2'>1</div>
        <div className='bg-blue-400'>2</div>
        <div className='bg-blue-400'>3</div>
        <div className='bg-red-200 col-span-2'>4</div>
        <div className='bg-green-400 col-span-3'>full </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-2 gap-12'>
            <div className='bg-red-600 '>Left side</div>
            <div className='bg-red-600 '>Right side</div>
          </div>
        </div>
    </div>
    </>

  )
}
