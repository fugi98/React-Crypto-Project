import React from 'react';
import { NavLink } from 'react-router-dom';
import './Tabs.css';

export default function Tabs()  {
  return (
    <div className="tabs-container">
      <nav className="tabs">
        <NavLink to="/essentials" className={({ isActive }) => (isActive ? 'active' : '')}>
          Essentials
        </NavLink>
        <NavLink to="/advanced" className={({ isActive }) => (isActive ? 'active' : '')}>
          Advanced
        </NavLink>
        {/* Add more tabs as needed */}
      </nav>
    </div>
  );
}


