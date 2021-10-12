import React from 'react';
import "./Styles/taskForm.scss"

const NewTaskForm = () => {
    return (
        <form className="form">
            <div className="form__wrapper">
            <label htmlFor="Name">Task Name</label>
            <input className="form__text-input" type="text" name="Name" placeholder="Name"/>
            </div>
            <div className="form__wrapper">
            <label htmlFor="Date">Date</label>
            <input className="form__text-input" type="text" name="Date" placeholder="Date"/>
            </div>
            <input type="submit" className="btn__input" value="Add Task"/>
        </form>
    );
};

export default NewTaskForm;