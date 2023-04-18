import React from "react";
//Component Import
import TaskItem from './TaskItem'; 

//styles
import styles from './TaskList.module.css';

const TaskList = ({tasks, deleteTask}) => {
    return(
        <ul className={styles.tasks}>
            {
                //Mudando a ordem da visualização das tasks a última fica por cima
                tasks.sort((a, b) => b.id - a.id).map(task => (
                    <TaskItem 
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                    />
                ))
            }
        </ul>
    )
}

export default TaskList