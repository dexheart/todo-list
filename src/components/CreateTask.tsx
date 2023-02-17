import styles from './CreateTask.module.css';
import plus from '../assets/plus.svg'
import { useState, ChangeEvent, FormEvent } from 'react'
import { Task } from "../App"

interface TaskListProps {
  tasks: Task[];
  setTasks: any;
}

export function CreateTask({tasks, setTasks}: TaskListProps) {

  
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask(): void {
    if(newTask.length < 1) return 

    const found = tasks.find( task => {
      return task.content === newTask;
    })

    if(found){
      return
    }
    
    const newTaskSanitazed = {
      id: Math.random(),
      checked: false,
      content: newTask
    }

    setTasks([...tasks, newTaskSanitazed])


    setNewTask('');
  }

  function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>) {
    if(event.target.value.length > 100){
      return
    }
    setNewTask(event.target.value);
  }





  return (
      <div className={styles.taskBox}>
        <input 
          type="text" 
          placeholder='Adicione uma nova tarefa' 
          value={newTask}
          className={styles.taskBoxInput}
          onChange={handleNewTaskChange}
          
        />
        <button onClick={handleCreateNewTask}>
          Criar
            <span 
              className={styles.imgPlusOnButton}><img src={plus} alt="" />
            </span>
        </button>
      </div>
  );
}