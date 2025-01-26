import React from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { Refresh, Share } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ p: 2, textAlign: 'center' }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Health Monitoring Result</Typography>
      
      <Box sx={{ mb: 4 }}>
        <img 
          src="/health-icon.svg" 
          alt="Health Icon"
          style={{ width: 150, height: 150 }}
        />
      </Box>

      <Paper 
        sx={{ 
          p: 2, 
          mb: 3,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Box>
          <Typography variant="h4">107</Typography>
          <Typography variant="subtitle1">Average Heart Rate</Typography>
        </Box>
        <Box>
          <Typography variant="h4">None</Typography>
          <Typography variant="subtitle1">Health Monitoring</Typography>
        </Box>
      </Paper>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton onClick={() => navigate('/')}>
          <Refresh />
        </IconButton>
        <IconButton>
          <Share />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ResultPage;