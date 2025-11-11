import React from 'react'

const TaskListNumbers = () => {
  return (
    <div className='flex box-border justify-between gap-5 mt-10'>
        <div className= 'rounded-xl w-[30%] px-9 py-6 bg-red-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className= 'rounded-xl w-[30%] px-9 py-6 bg-green-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className= 'rounded-xl w-[30%] px-9 py-6 bg-blue-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className= 'rounded-xl w-[30%] px-9 py-6 bg-yellow-400'>
            <h2 className='text-3xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers