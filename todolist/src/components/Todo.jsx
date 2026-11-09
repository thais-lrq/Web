import React from 'react';
import Task from './Task.jsx';
import '../assets/style/TaskList.css';

const getDurationInMinutes = (durationStr) => {
    if (typeof durationStr !== 'string') return 0;
    if (durationStr.includes('h')) {
        const [hours, rest] = durationStr.split('h');
        const minutes = rest ? parseInt(rest) : 0;
        return parseInt(hours) * 60 + minutes;
    } else {
        return parseInt(durationStr);
    }
};

const formatMinutes = (totalMinutes) => {
    const h = Math.floor(totalMinutes / 60);
    const m = totalMinutes % 60;
    return h > 0 ? `${h}h${m > 0 ? m + 'min' : ''}` : `${m} min`;
};

const Todo = ({ tasks, onTaskDone, onChangePriority  }) => {
    const totalTasks = tasks.length;
    const totalDurationInMinutes = tasks.reduce(
        (sum, task) => sum + getDurationInMinutes(task.duration),
        0
    );

    return (
        <div className="tasklist">
            <h2>Tâches à faire :</h2>
            <div style={{ marginBottom: '10px', fontWeight: 'bold' }}>
                Nombre de tâches : {totalTasks} <br />
                Durée totale : {formatMinutes(totalDurationInMinutes)}
            </div>  

            {tasks.map(task => (
                <Task
                    key={task.id}
                    title={task.title}
                    duration={task.duration}
                    priority={task.priority}
                    done={task.done}
                    onDone={() => onTaskDone(task)}
                    onChangePriority ={(newPriority) => onChangePriority (task.id, newPriority)} 
                />
            ))}
        </div>
    );
};

export default Todo;
