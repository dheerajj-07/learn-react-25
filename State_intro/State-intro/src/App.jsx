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

  // // start
  // const a = useRef(0)
  
  // useEffect(() => {
  //   a.current = a.current + 1
  //   console.log(a.current)
  // })
  // //end

  //start
  const btnref = useRef()
  useEffect(() => {
    console.log("First rendering")
    btnref.current.style.backgroundColor = "red"
  },[])

  

  return (
    <>
     <div>The count is {count}</div>
     <button ref={btnref} onClick={()=>{
      setCount(count + 1)
     }}>Update count</button>
     <button onClick={()=>{
      btnref.current.style.display = 'none'}}>Change me</button>
    </>
  )
}

export default App
