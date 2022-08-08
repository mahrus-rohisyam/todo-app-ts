import React from 'react'
import ITask from '../interfaces/ITask'

const TaskCard = ({task, id,children}: {task: ITask, id: number, children: React.ReactNode}) => {
  return (
    <div className="shadow-xl border-2 border-sec-gray p-2 py-3 rounded-xl relative max-w-md flex justify-between items-start min-w-[60%]">
      <div className="text-left h-full w-full flex items-center">
        <p className='px-3'>{id + 1}</p>
        <p>{task.task}</p>
      </div>
      {children}
  </div>
  )
}

export default TaskCard