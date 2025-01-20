import React from 'react'
import { useReducer } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../../slices/demoSlice'
export default function Countereg() {
    let counter = useSelector((state)=>state.counter.value)
    let dispatch = useDispatch()
    let inc=()=>
    {
            dispatch(increment())
    }
  return (
    <>
    <div>Countereg {counter}</div>
    <input type="button" value="+" onClick={()=>inc()} />
    </>
  )
}
