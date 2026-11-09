import React, { useState } from 'react';
import '../assets/style/AddTask.css';

const AddTask = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [duration, setDuration] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === '' || duration.trim() === '') return;
        const newTask = {
            id: Date.now(),
            title,
            duration: duration.trim(),
            priority: 1
        };  

        onAdd(newTask);
        setTitle('');
        setDuration('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
            <input
                type="text"
                placeholder="Titre de la tâche"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Durée (ex: 30 min, 1h)"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
            />
            <button type="submit">Ajouter</button>
        </form>
    );
};

export default AddTask;
