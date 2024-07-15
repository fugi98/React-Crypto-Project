// RewardTimer.jsx
import React, { useState, useEffect } from 'react';
import './RewardTimer.css';

export default function RewardTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 7,
    minutes: 20,
    seconds: 25,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };
        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              }
            }
          }
        }
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='timer'>
      <p>Next Update In</p>
      <div className='timerDisplay'>
        <TimerUnit value={timeLeft.days} unit="Days" />
        <TimerUnit value={timeLeft.hours} unit="Hrs" />
        <TimerUnit value={timeLeft.minutes} unit="Mins" />
        <TimerUnit value={timeLeft.seconds} unit="Sec" />
      </div>
    </div>
  );
}

function TimerUnit({ value, unit }) {
  return (
    <div className='timerUnit'>
      <span className='value'>{value.toString().padStart(2, '0')}</span>
      <span className='unit'>{unit}</span>
    </div>
  );
}
