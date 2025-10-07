import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // useEffect(() => {
  //   alert("Hey welcome to my page")
  // }, []) // sirf ek baar chlo jab component mount ho bas
  // useEffect(() => {
  //   alert("count has been updated")
  // }, [count]) // jab bhi count update ho tab chlo

  const a = useRef(0)
  
  useEffect(() => {
    a.current = a.current + 1
    console.log(a.current)
  })


  return (
    <>
     <div>The count is {count}</div>
     <button onClick={()=>{
      setCount(count + 1)
     }}>Update count</button>
    </>
  )
}

export default App
