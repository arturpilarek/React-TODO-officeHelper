import React from 'react';
import "./Styles/taskForm.scss"
import {useState} from "react";

const NewTaskForm = ({newTask}) => {
    const [name, setName] = useState('')
    const [date, setDate] = useState('')
    const [done, setDone] = useState(false)
    const onSubmit = (e) => {
        e.preventDefault()
        if(!name) {
            alert('Please name your task')
            return
        }
        newTask({name,date})
        setName('')
        setDate('')
        setDone(false)
    }
    return (
        <form className="form"  onSubmit={onSubmit}>
            <div className="form__wrapper">
            <label htmlFor="Name">Task Name</label>
            <input className="form__text-input" type="text" name="Name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form__wrapper">
            <label htmlFor="Date">Date</label>
            <input className="form__text-input" type="text" name="Date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)}/>
            </div>
            <input type="submit" className="btn__input" value="Add Task"/>
        </form>
    );
};

export default NewTaskForm;