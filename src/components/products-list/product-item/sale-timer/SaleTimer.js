import React, { useState, useEffect } from 'react';

import { getTimeRemaining } from '../../../../utilits'

import './SaleTimer.scss';


function SaleTimer(props) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(props.endtime));

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(getTimeRemaining(props.endtime));
    }, 1000);
  });

  return (
      <span>
        {
          `Remaining: ${timeLeft.days}:${timeLeft.hours}:${timeLeft.minutes}:${timeLeft.seconds}`
        }
      </span>
  );
}

export default SaleTimer;
