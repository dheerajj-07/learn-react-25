import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex Nav justify-between items-center bg-slate-600 text-white w-screen p-4 sticky top-0 box-border'>
        <div className="logo mx-4 text-3xl">i-Task</div>
        <ul className='flex gap-10 text-lg font-semibold mx-9 px-2'>
            <li className='cursor-pointer hover:text-orange-400'>Home</li>
            <li className='cursor-pointer hover:text-orange-400'>Your Tasks</li>
        </ul>
    </nav>
  )
}

export default Navbar