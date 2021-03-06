import React from 'react';

const Button = ({showTasks, taskVisible}) => {
    return (
        <div>
            <button className='btn' onClick={() => showTasks()}>{taskVisible ? 'Close' : 'Open'}</button>
        </div>
    );
};

export default Button;