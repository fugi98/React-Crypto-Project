// Quest.js
import React from 'react';
import './QuestCard2.css';

export default function Quest2  ({ imageSrc, title, details, tasks })  {
  return (
    <div className="quest2">
      <div className="quest2-content">
        <img src={imageSrc} alt={title} className="quest2-image" />
        <div className="quest2-details">
          <h3>{title}</h3>
          <p>{details}</p>
          <div className="progress2-bar">
            <div className="progress2" style={{ width: `${tasks}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}


