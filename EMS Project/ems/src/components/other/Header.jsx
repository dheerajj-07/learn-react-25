import React, { useEffect, useState } from 'react'
import AuthProvider from '../../context/AuthProvider'

const Header = ({data}) => {
   const [username, setUsername] = useState('')
  // if(!data){
  //   setUsername('Admin')
  // }
  // else{
  //   setUsername(data.name)
  // }
  
  

  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xlb font-medium'>Hello <br /> <span className='text-3xl font-semibold'>username👋</span> </h1>
        <button className='bg-red-500 text-white px-5 py-2 rounded-2xl text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header