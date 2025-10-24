import React, { useContext } from 'react'
import Component1 from './Component1'
import { counterContext } from '../Context/context'
const Button = () => {
    const value= useContext(counterContext)
  return (
    <div>
        <button onClick={()=>{value.setCount((count)=>count+1)}}>
            <span><Component1/></span>I am a Button
        </button>
    </div>
  )
}

export default Button