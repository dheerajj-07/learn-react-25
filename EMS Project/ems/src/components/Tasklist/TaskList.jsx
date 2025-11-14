import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({data}) => {
    
    console.log(data)
  return (
    <div id="tasklist" className='h-[55%] py-5 w-full mt-10 flex items-center justify-start gap-5 flex-nowrap overflow-x-auto'>
        {data?.tasks?.map((e)=>{
            if(e.active){
                return <AcceptTask/>
            }
            if(e.NewTask){
                return <NewTask/>
            }
            if(e.completed){
                return <CompleteTask/>
            }
            if(e.failed){
                return <FailedTask/>
            }
        })}
        
    </div>
  )
}

export default TaskList