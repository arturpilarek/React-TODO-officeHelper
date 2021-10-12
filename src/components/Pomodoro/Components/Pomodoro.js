import React, {useState} from 'react';
import PomodoroHeader from "./PomodoroHeader";
import PomodoroContent from "./PomodoroContent";

const Pomodoro = () => {
    const [taskVisible, setAddTask] = useState(true)

    const toggleTaskVisibility = () => {
        setAddTask(
            !taskVisible
        )
    }
    return (
        <div className='main__container'>
        <PomodoroHeader showTasks={toggleTaskVisibility} taskVisible={taskVisible}/>
            {taskVisible && <PomodoroContent/>}
        </div>
    );
};

export default Pomodoro;