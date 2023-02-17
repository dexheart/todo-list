import styles from './TaskList.module.css';
import clipboard from "../assets/Clipboard.svg"
import { Task } from './Task'
import { Task as TaskProps } from "../App"

interface TaskListProps {
    tasks: TaskProps[];
    isListEmpty: boolean;
    onDeleteTask: (taskId: number) => void;
    onUpdateTask: (taskId: number) => void;
}



export function TaskList({ tasks, isListEmpty, onDeleteTask, onUpdateTask }: TaskListProps) {

    

    

    return(

        <div className={isListEmpty ? styles.mainTaskBoxEmpty : styles.mainTaskBox}>
            {isListEmpty ?
                <>
                <p><img src={clipboard} alt="" /></p>
                <p className={styles.textFirstLineStyle}>Você ainda não tem tarefas cadastradas</p>
                <p className={styles.textSecondLineStyle}>Crie tarefas e organize seus itens a fazer</p>
                </> :

                <>

                {tasks.map(tasks => { 
                    return(
                        <Task 
                            key={tasks.id}
                            id={tasks.id}
                            content={tasks.content}
                            checked={tasks.checked}
                            onDeleteTask={onDeleteTask}
                            onUpdateTask={onUpdateTask}
                        />
                    )
                })}
                
                </>
        
            }
        </div>
    );
}