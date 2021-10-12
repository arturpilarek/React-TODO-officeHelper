import React from 'react';
import BinIcon from './bin.svg'
import "./Styles/task.scss"

const Task = () => {
    return (
        //dodaj task active na dbl click
        <div className="task">
            <div className="task__wrapper">
                <p className="task__content">Do something</p>
                <p className="task__date">Today</p>
            </div>
            <img src={BinIcon} alt="Remove Icon"/>
        </div>
    );
};

export default Task;