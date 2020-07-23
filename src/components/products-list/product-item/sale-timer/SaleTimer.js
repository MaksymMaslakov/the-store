import React, { useState, useEffect } from 'react';

import { getTimeRemaining } from '../../../../utilits'

import './SaleTimer.scss';


function SaleTimer(props) {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(props.endtime));

  useEffect(() => {
    const timout = setTimeout(() => {
      setTimeLeft(getTimeRemaining(props.endtime));
    }, 1000*60);

    return () => clearTimeout(timout)
  });

  return (
      <span>
        {
          `Remaining: ${timeLeft.days ? (timeLeft.days + ' day(-s) ') : ''} ${timeLeft.hours} hour(-s)`
        }
      </span>
  );
}

export default SaleTimer;
