import React from 'react';
import ToDo from "./components/ToDo/ToDo";
import Pomodoro from "./components/Pomodoro/Components/Pomodoro";

const App = () => {
    return (
        <div>
            <ToDo/>
            <Pomodoro/>
        </div>
    );
};

export default App;