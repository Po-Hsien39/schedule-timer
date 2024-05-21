import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const WelcomePage = () => {
  const navigate = useNavigate();
  const [sessionName, setSessionName] = useState('');

  const handleInputChange = (event) => {
    setSessionName(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      navigate(`/${sessionName}`);
    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  return (
    <Box sx={{ textAlign: 'center', color: '#fff', height: '100%', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#FFC9B5' }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Scheduled Timer
      </Typography>
      <Typography variant="h6" sx={{ mb: 4 }}>
        A productivity timer for remote teams
      </Typography>

      <Typography variant="subtitle1" sx={{ mb: 2 }}>
        Create a shareable link
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6">
            cuckoo.team/
          </Typography>
          <TextField
            variant="standard"
            value={sessionName}
            onChange={handleInputChange}
            sx={{ input: { color: '#fff' }, marginLeft: 1, width: '200px' }}
          />
          <Button variant="contained" endIcon={<ArrowForwardIcon />} onClick={handleSubmit}>
            Go
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomePage;