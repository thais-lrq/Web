import React from 'react';
import '../assets/style/PriorityLevel.css'

const PriorityLevel = ({ level, active, onClick }) => {
    return (
        <div
            className={`level ${active ? 'on' : 'off'}`}
            onClick={onClick} 
        >
        </div>
    );
};

export default PriorityLevel;
