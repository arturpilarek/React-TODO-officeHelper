import React from 'react';
import Task from "./Task";

const Tasks = ({tasks, deleteTask, toggleTaskDone}) => {
    return (
        <>
            {tasks.map((task)=> (
            <Task key={task.id} task={task} deleteTask={deleteTask} toggleTaskDone={toggleTaskDone}/>
            ))}
        </>
    );
};

export default Tasks;