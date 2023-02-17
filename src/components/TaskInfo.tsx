import styles from './TaskInfo.module.css'

interface TaskInfoProps {
  createdTasks: number;
  finishedTasks: number;
}


export function TaskInfo({createdTasks, finishedTasks}: TaskInfoProps) {

    return(
        <div className={styles.infoBox}>
          <p>
            <span 
              className={styles.taskNameStyle}>Tarefas Criadas
            </span> 
            <span 
              className={styles.numberOfTasks}>{createdTasks}
            </span>
          </p>
          <p>
            <span 
              className={styles.taskNameFinishedStyle}>Tarefas Concluídas
            </span> 
            <span 
              className={styles.numberOfTasks}>{finishedTasks} de {createdTasks}
            </span>
          </p>
        </div>
        
        
    );
}