import React from 'react';
import Header from "./Header";
import "./Styles/toDo.scss"
import Tasks from "./Tasks";
import NewTaskForm from "./newTaskForm";
import {useState} from "react";

const ToDo = () => {
    const [tasks, setTask] = useState([
        {
            id: 1,
            name: 'Do Something',
            date: 'Today',
            done: true
        },
        {
            id: 2,
            name: 'Wash Dishes',
            date: 'Tomorrow',
            done: false
        }
    ])

    const deleteTask = (id) => {
        setTask(tasks.filter((task) => task.id !== id))
    }

    const toggleTaskDone = (id) => {
        setTask(
            tasks.map((task) => {
                return task.id === id ? {...task, done: !task.done} : task
            })
        )
    }

    const addTask = (task) => {
        const id = Math.floor(Math.random() * 2000 + 5)
        const done = false
        const newTask = {id,done,...task}
        setTask([...tasks, newTask])
    }
    return (
        <div className="main__container">
            <Header />
            <NewTaskForm newTask={addTask}/>
            <Tasks deleteTask={deleteTask} toggleTaskDone={toggleTaskDone} tasks={tasks} />
        </div>
    );
};

export default ToDo;