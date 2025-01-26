import React, { useEffect, useState } from 'react';
import { Box, Typography, LinearProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const MonitoringPage = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          navigate('/result');
          clearInterval(timer);
        }
        return newProgress;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: '#b0c4de',
        color: 'white',
        fontFamily: '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
      }}
    >
      <Typography variant="h4" sx={{ mb: 2, fontWeight: 500 }}>Monitoring...</Typography>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 400 }}>Please remain still and steady</Typography>
      <Box sx={{ width: '80%', mb: 4 }}>
        <LinearProgress 
          variant="determinate" 
          value={progress} 
          sx={{ 
            height: 8, 
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.3)',
            '& .MuiLinearProgress-bar': {
              backgroundColor: 'white'
            }
          }} 
        />
      </Box>
      <Box 
        sx={{ 
          position: 'relative', 
          width: 200, 
          height: 200,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          '&::before': {
            content: '""',
            position: 'absolute',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            animation: 'pulse 2s infinite'
          },
          '@keyframes pulse': {
            '0%': {
              transform: 'scale(0.95)',
              boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.3)'
            },
            '70%': {
              transform: 'scale(1)',
              boxShadow: '0 0 0 20px rgba(255, 255, 255, 0)'
            },
            '100%': {
              transform: 'scale(0.95)',
              boxShadow: '0 0 0 0 rgba(255, 255, 255, 0)'
            }
          }
        }}
      >
        <Box
          sx={{
            width: 160,
            height: 160,
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          <img 
            src="/heart-icon.svg" 
            alt="Heart"
            style={{
              width: '70%',
              height: '70%',
              opacity: 0.8
            }}
          />
        </Box>
      </Box>
      <Box
        onClick={() => navigate('/')}
        sx={{
          mt: 4,
          px: 4,
          py: 1.5,
          borderRadius: 2,
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
          }
        }}
      >
        <Typography variant="button" sx={{ color: 'white', fontWeight: 500 }}>
          Cancel
        </Typography>
      </Box>
    </Box>
  );
};

export default MonitoringPage;