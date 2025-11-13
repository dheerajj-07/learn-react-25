import React from 'react'
import AuthProvider from '../../context/AuthProvider'

const Header = (data) => {
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xlb font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.name}👋</span> </h1>
        <button className='bg-red-500 text-white px-5 py-2 rounded-2xl text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header