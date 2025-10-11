import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setname] = useState("Dheeraj")
  const [Form, setForm] = useState({email:"", phone:""})

  const handleClick = ()=>{
    alert("I am clicked")
  }
  const handleMouseHover = ()=>{
    alert("Mouse hovered over me")
  }
  const handleNameChange = (e)=>{
    setname(e.target.value)
  }
  const handleChange = (e)=>{
    setForm({...Form,[e.target.name]:e.target.value})
    console.log(Form)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click me</button>
      </div>
      <div className="red" onMouseOver={handleMouseHover}>
        <p>i am a red div</p>
      </div>
      <input type="text" value={name} onChange={handleNameChange}/>

      <input type="text" name='email' value={Form.email} onChange={handleChange}/>
      <input type="text" name='phone' value={Form.phone} onChange={handleChange}/>
    </>
  )
}

export default App
