import React from 'react'
import { useState } from 'react'

const Login = () => {
   
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("Email is: ",email)
    console.log("Password is: ",password)

    setEmail("")
    setPassword("")
     
  
}

  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <div className="border-2 border-emerald-600 p-20 rounded-2xl">
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col items-center justify-center" action="">               
          <input required
            value={email}
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 text-black outline-none"
            type="email"
            placeholder="Enter your email:"
          />
          <input required
            value={password}
            onChange={(e)=>{
              setPassword(e.target.value)
            }}
            className="border-2 border-emerald-600 rounded-full py-3 px-5 mt-4 text-black outline-none"
            type="password"
            placeholder="Enter password"
          />
          <button className="border-none bg-emerald-600 rounded-full py-3 px-5 mt-5 text-white outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login