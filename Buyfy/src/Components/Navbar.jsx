import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-white flex px-15 shadow-2xl py-4 justify-between align-middle'>
        <Link to="/"><div className='text-2xl text-black'><span className='font-serif text-red-500'>B</span>uyFy</div></Link>
        <div >
            <ul className='flex gap-6 text-xl cursor-pointer justify-center'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/products'><li>Products</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/contact'><li>Contact</li></Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar