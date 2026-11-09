import tasksData from "../data/tasksData.js"
import React, { useState, useEffect } from 'react';
import Todo from './Todo.jsx';
import AddTask from './AddTask.jsx';
import Done from './Done.jsx';  
import '../assets/style/TaskApp.css';


const TaskApp = () => {
    const [tacheAFaire, setTacheAFaire] = useState([]);
    const [tachesFaite, setTachesFaite] = useState([]);
    const [showDone, setShowDone] = useState(true);
    const [taskCount, setTaskCount] = useState(4);

    useEffect(() => {
        const initialTasks = tasksData.map(task => ({
            id: task.id,
            title: task.title,
            duration: String(task.duration),
            priority: 1,
            done: false
        }));
        setTacheAFaire(initialTasks);
    }, []);

    const ajouterTache = (task) => {
        setTaskCount(prevCount => prevCount + 1);
        const newTask = {
            id: `T${taskCount + 1}`,
            title: task.title,
            duration: task.duration,
            priority: 1
        };
        setTacheAFaire(prev => [...prev, newTask]);
    };

  const marquerCommeFaite = (tache) => {
    setTacheAFaire(prev => prev.filter(t => t.id !== tache.id));
    setTachesFaite(prev => [...prev, { ...tache, done: true }]);
};

const changePriority = (id, newPriority) => {
    setTacheAFaire(prev => {
        const updatedTasks = prev.map(t =>
            t.id === id ? { ...t, priority: newPriority } : t
        );
        return updatedTasks.sort((a, b) => b.priority - a.priority);
    });
};

    return (
        <div className="taskApp">
          <h1>TaskApp</h1>
          <AddTask onAdd={ajouterTache} />
          <Todo tasks={tacheAFaire} onTaskDone={marquerCommeFaite} onChangePriority={changePriority} />
          <button onClick={() => setShowDone(!showDone)}>
                {showDone ? 'Masquer les tâches faites' : 'Afficher les tâches faites'}
            </button>

            {showDone && <Done tasks={tachesFaite} />}
      </div>
  );
};


export default TaskApp;
