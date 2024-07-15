import React from 'react';
import RewardTimer from './RewardTimer';
import CryptoDraw from './CryptoDraw';
import Info from './Info';
import './AirdropSection.css';

export default function AirdropSection() {
  return (
    <div className='airdrop-container'>
      <div className="main-container">
        <div className="left-column">
          <RewardTimer />
          <CryptoDraw />
        </div>
        <div className="right-column">
          <Info />
        </div>
      </div>
    </div>
  );
}
