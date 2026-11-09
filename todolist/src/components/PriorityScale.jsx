import React from 'react';
import PriorityLevel from './PriorityLevel.jsx';
import '../assets/style/PriorityScale.css';

const PriorityScale = ({ currentPriority, onChangePriority }) => {
    const levels = [1, 2, 3, 4, 5, 6];

    return (
        <div className="scale">
            {levels.map(level => (
                <PriorityLevel
                    key={level}
                    level={level}
                    active={level <= currentPriority}
                    onClick={() => onChangePriority(level)}
                />
            ))}
        </div>
    );
};

export default PriorityScale;
