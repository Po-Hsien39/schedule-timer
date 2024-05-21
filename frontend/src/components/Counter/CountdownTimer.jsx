import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';

const CountdownTimer = ({ endTime }) => {
  const parseEndTime = (endTimeStr) => {
    const parsedDate = new Date(endTimeStr);
    return parsedDate.getTime(); // Returns the number of milliseconds since January 1, 1970
  };

  const calculateTimeLeft = () => {
    const endTimeInMilliseconds = parseEndTime(endTime);
    const difference = endTimeInMilliseconds - Date.now();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference / 1000) / 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    } else {
      timeLeft = {
        minutes: 0,
        seconds: 0
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  const { minutes, seconds } = timeLeft;

  return (
    <Box>
      <Typography sx={{ fontSize: '60px' }}>
        {minutes < 10 ? '0' : ''}{minutes}:{seconds < 10 ? '0' : ''}{seconds}
      </Typography>
    </Box>
  );
};

export default CountdownTimer;
