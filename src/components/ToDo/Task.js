import React from 'react';
import BinIcon from './bin.svg'
import "./Styles/task.scss"

const Task = ({task, deleteTask, toggleTaskDone}) => {
    return (
        //dodaj task active na dbl click
        <div className={`task ${task.done ? 'task--active' : ''}`} onDoubleClick={() => toggleTaskDone(task.id)}>
            <div className="task__wrapper">
                <h3 className="task__content">{task.name}</h3>
                <p className="task__date">{task.date}</p>
            </div>
            <img src={BinIcon} alt="Remove Icon" onClick={() => deleteTask(task.id)}/>
        </div>
    );
};

export default Task;