import React from 'react'

const CompleteTask = () => {
  return (
    <div className='h-full w-[320px] bg-green-400 rounded-xl shrink-0 p-5'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-800 px-3 py-1 rounded-xl text-sm'>High</h3>
            <h4>11 oct 2025</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube Video.</h2>
            <p className='text-sm mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam commodi pariatur ad velit! Corporis, ut?
            </p>
            
            <div className='mt-5'>
                <button className='w-full'>Completed</button>
            </div>
            
        </div>
  )
}

export default CompleteTask