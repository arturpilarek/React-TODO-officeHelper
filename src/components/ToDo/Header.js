import React from 'react';
import Button from "./Button";
import  "./Styles/header.scss"
import TaskLogo from "./taskIcon.svg"

const Header = ({showTasks, taskVisible}) => {
    return (
        <div className="header">
            <div className="title__wrapper">
                <img src={TaskLogo} alt="Task Manager Icon"/>
            <h1>Task Manger</h1>
            </div>
            <Button showTasks={showTasks} taskVisible={taskVisible}/>
        </div>
    );
};

export default Header;