import React from 'react';
import Header from "./Header";
import "./Styles/toDo.scss"
import Tasks from "./Tasks";
import NewTaskForm from "./newTaskForm";
// import {useState} from "react";

const ToDo = () => {
    // const []
    return (
        <div className="main__container">
            <Header />
            <NewTaskForm/>
            <Tasks />
        </div>
    );
};

export default ToDo;