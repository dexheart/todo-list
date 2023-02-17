import { useState, ChangeEvent } from 'react'
import { Header } from './components/Header';
import { TaskInfo } from './components/TaskInfo';
import { CreateTask } from './components/CreateTask';

import './global.css';
import styles from './App.module.css'
import { TaskList } from './components/TaskList';

export interface Task {
  id: number;
  content: string;
  checked: boolean;
}


const mockedTasks = [
  {
    id: 0,
    content: "Fazer a tarefa de casa",
    checked: true
  },

  {
    id: 1,
    content: "Ficar bom no Dota",
    checked: false
  },

  {
    id: 2,
    content: "Fazer academia",
    checked: false
  }

  ]




export function App() {

  const [tasks, setTasks] = useState<Task[]>(mockedTasks)

  const isListEmpty = tasks.length === 0;
  const createdTasks = tasks.length;
  

  const finishedTasks = tasks.reduce((
    prevValue, element) => element.checked ? prevValue + 1 : prevValue, 0)
  
  function deleteTask(taskId: number): void {
    const newTasks = tasks.filter(task => {
      return task.id !== taskId;
    })
    setTasks(newTasks);
  }

  

  function updateTask(taskId: number): void {
    const newTasks = tasks.map(task => 
      task.id === taskId ? { ...task, checked: !task.checked } : task
    )
    setTasks(newTasks);
  }


  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.allBox}>
        
        <CreateTask  
          tasks={tasks}
          setTasks={setTasks}
        />

        <div className={styles.centerBox}>
          <TaskInfo createdTasks={createdTasks} finishedTasks={finishedTasks}/>

          <TaskList 
            tasks={tasks} 
            isListEmpty={isListEmpty}
            onDeleteTask={deleteTask}
            onUpdateTask={updateTask}
          />

        </div>
        

      </main>

    </div>
  )
}

