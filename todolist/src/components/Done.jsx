import React from 'react';
import Task from './Task.jsx';
import '../assets/style/doneButton.css';

const Done = ({ tasks }) => {
    if (tasks.length === 0) {
        return <h2>Aucune tâche complétée.</h2>;
    }

    return (
        <div>
            <h2>Tâches terminées :</h2>
            {tasks.map(task => (
                <Task key={task.id} title={task.title} duration={task.duration} priority={task.priority} done={task.done} />
            ))}
        </div>
    );
};

export default Done;
