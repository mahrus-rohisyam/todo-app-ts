import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import LayerComponent from "../components/LayerComponent";
// import {Redirect} from 'react-router-dom'
import TaskCard from "../components/TaskCard";
import ITask from "../interfaces/ITask";

const TodoApp = () => {
  const [task, setTask] = useState<string>('')
  const [taskList, setTaskList] = useState<ITask[]>([])
  const [user, setUser] = useState(null)

  const handleAddTask = async () => {
    const newTask = { id: Date.now(), task: task, complete: false };
    setTaskList([...taskList, newTask]);
    setTask("");
    await console.log(taskList);
  };

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement> ) => {
    let key = e.key
    key === 'Enter' && handleAddTask()
    
  }

  const completeHandler = (id: number) => {
    setTaskList(taskList.map((v) => {
      if(v.id === id) {
        v.complete = !v.complete
        return v
      } else {
        return v
      }
    }))
  }

  useState(() => {
    if (user === null || undefined) {
      return  <Navigate to='/login' />
    } else {
      console.log('Hi user')
    }
  })

  return (
    <LayerComponent header footer>
      <section id="welcome" className="container text-center">
        <h1>Todo App</h1>
        <h2>This is simple Todo App implementing CRUD.</h2>
        <div id="todo-app" className="flex flex-col w-full items-center py-5">
          <div id="input" className="shadow-sm border-2 border-sec-gray p-2 py-3 rounded-xl relative max-w-md flex items-start min-w-[60%]">
            <input value={task} onKeyUp={onEnter} onChange={(e) => {setTask(e.target.value)}} className="text-left h-full w-full" placeholder="Enter your task" type="text" />
            <button onClick={handleAddTask} className="absolute right-4">Enter</button>
          </div>

          <div id="todo-list" className="w-full flex flex-col items-center py-5 gap-3">
            {taskList.length > 0 ? taskList.map((mappedTask: ITask, index) => {
              return (
                <TaskCard task={mappedTask} id={index} key={index}>
                  <button onClick={() => {completeHandler(mappedTask.id)}} className='checkbox'>
                    {mappedTask.complete ? <span className='block w-[25px] h-[25px] bg-[green] rounded-lg'></span> : <span className='block w-[25px] h-[25px] bg-main-red rounded-lg'></span>}
                  </button>
                </TaskCard>
              )
            })
            : <div>Create new task !</div>
          }
          </div>
        </div>
      </section>
    </LayerComponent>
  );
};

export default TodoApp;
