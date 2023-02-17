import styles from './Task.module.css'
import trash from '../assets/trash.svg'
import { ChangeEvent, useState } from 'react';

interface TaskProps {
    id: number;
    content: string;
    checked: boolean;
    onDeleteTask: (taskId: number) => void;
    onUpdateTask: (taskId: number) => void;
}



export function Task({id, content, checked, onDeleteTask, onUpdateTask} : TaskProps){

    return (
        <div className={styles.task}>
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={() => onUpdateTask(id)}
            />
            <span>{content}</span>
            <img onClick={() => onDeleteTask(id)} src={trash} alt="" />

        </div>
    );
}