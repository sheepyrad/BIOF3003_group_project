import React, { useEffect, useState } from 'react';
import { Box, Typography, CircularProgress, LinearProgress } from '@mui/material';
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
        <LinearProgress variant="determinate" value={progress} sx={{ height: 8, borderRadius: 4 }} />
      </Box>
      <Box 
        sx={{ 
          position: 'relative', 
          width: 200, 
          height: 200,
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
        <img 
          src="/heart-icon.svg" 
          alt="Heart"
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            padding: '20px',
            boxSizing: 'border-box',
          }}
        />
        <CircularProgress
          size={200}
          thickness={2}
          sx={{
            position: 'absolute',
            color: 'rgba(255, 255, 255, 0.5)',
            animation: 'rotate 2s linear infinite',
            '@keyframes rotate': {
              '0%': {
                transform: 'rotate(0deg)'
              },
              '100%': {
                transform: 'rotate(360deg)'
              }
            }
          }}
        />
      </Box>
    </Box>
  );
};

export default MonitoringPage;