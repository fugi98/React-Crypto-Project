// Quest.js
import React from 'react';
import './Quest.css';

export default function Quest  ({ imageSrc, title, details, tasks })  {
  return (
    <div className="quest">
      <div className="quest-content">
        <img src={imageSrc} alt={title} className="quest-image" />
        <div className="quest-details">
          <h3>{title}</h3>
          <p>{details}</p>
          <div className="progress-bar1">
            <div className="progress1" style={{ width: `${tasks}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}


