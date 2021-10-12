import React from 'react';

const Button = ({showTasks, taskVisible}) => {
    return (
        <>
            <button className='btn' onClick={() => showTasks()}>{taskVisible ? 'Close' : 'Open'}</button>
        </>
    );
};

export default Button;