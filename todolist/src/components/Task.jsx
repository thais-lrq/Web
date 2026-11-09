import React from 'react';
import '../assets/style/Task.css';
import PriorityScale from './PriorityScale.jsx';


const Task = ({title, duration,priority, onDone, onChangePriority, done }) => {
    return (
        <div className="task">
            <div className="info">
                <div><strong>{title}&nbsp;</strong></div>
                <div>Durée : {duration} </div>  
            </div>
            {done ? (
                <div>Priority: {priority}</div>
            ) : (
                <PriorityScale
                    currentPriority={priority}
                    onChangePriority={onChangePriority}
                />
            )}

            {onDone && !done && (
                <button
                className="doneButton"
                onClick={onDone} 
                style={{ marginLeft: '10px' }}>✅</button>
            )}
        </div>
    );
};

export default Task;
