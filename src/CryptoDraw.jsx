// CryptoDraw.jsx
import React from 'react';
import './CryptoDraw.css';

export default function CryptoDraw() {
  const handleClick = () => {
    window.open('https://www.coinbase.com/learn/crypto-basics', '_blank'); // Open the page with detailed crypto information
  };

  return (
    <div className='cryptoDraw'>   
      <div className='draw'>
        <div className="draw-content">
          <h3>Crypto Insights</h3>
        </div>
      </div>
      <p>Explore In-Depth Knowledge</p>
      <button className='claimButton' onClick={handleClick}>Learn More →</button>
    </div>
  );
}
