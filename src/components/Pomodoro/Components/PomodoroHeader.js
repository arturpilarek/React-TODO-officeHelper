import React from 'react';
import  "../../ToDo/Styles/header.scss"
import TaskLogo from "./pomodoro-final.svg"
import PomodoroButton from "./PomodoroButton";

const Header = ({showTasks, taskVisible}) => {
    return (
        <div className="header">
            <div className="title__wrapper">
                <img src={TaskLogo} alt="Task Manager Icon"/>
                <h1>Pomodoro Timer</h1>
            </div>
            <PomodoroButton showTasks={showTasks} taskVisible={taskVisible}/>
        </div>
    );
};

export default Header;