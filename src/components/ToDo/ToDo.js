import React from 'react';
import Header from "./Header";
import "./Styles/toDo.scss"
import Tasks from "./Tasks";
import NewTaskForm from "./newTaskForm";
import {useState} from "react";

const ToDo = () => {
    const [taskVisible, setAddTask] = useState(true)
    const [tasks, setTask] = useState([
        {
            id: 1,
            name: 'Click me twice to mark as done',
            date: 'Today',
            done: false
        },
        {
            id: 2,
            name: 'Add New Task',
            date: 'Today',
            done: true
        }
    ])

    const toggleTaskVisibility = () => {
        setAddTask(
            !taskVisible
        )
    }

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
            <Header showTasks={toggleTaskVisibility} taskVisible={taskVisible} />
            {taskVisible && <>
            <NewTaskForm newTask={addTask}/>
            <Tasks deleteTask={deleteTask} toggleTaskDone={toggleTaskDone} tasks={tasks} />
            </>}
        </div>
    );
};

export default ToDo;