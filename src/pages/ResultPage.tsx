import React from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { Refresh, Share } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const ResultPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      p: 2,
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f8f9fc 0%, #b0c4de 100%)',
      fontFamily: '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Health Monitoring Result</Typography>
      
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
        <img 
          src="/health-icon.svg" 
          alt="Health Icon"
          style={{ width: 120, height: 120 }}
        />
      </Box>

      <Box sx={{ 
        width: '100%', 
        height: 100, 
        mb: 3,
        bgcolor: 'white',
        borderRadius: 2,
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Box sx={{ 
          width: '100%', 
          height: 60, 
          bgcolor: '#f5f5f5',
          borderRadius: 1,
          mb: 2,
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box sx={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            width: 40,
            height: 40,
            bgcolor: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <Box sx={{
              width: 0,
              height: 0,
              borderTop: '8px solid transparent',
              borderBottom: '8px solid transparent',
              borderLeft: '12px solid #1976d2',
              ml: 1
            }} />
          </Box>
        </Box>
      </Box>

      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        mb: 4
      }}>
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, color: '#1976d2' }}>107</Typography>
          <Typography variant="body1" color="text.secondary">Average Heart Rate</Typography>
        </Box>
        <Box sx={{ textAlign: 'center', flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: 500, color: '#1976d2' }}>None</Typography>
          <Typography variant="body1" color="text.secondary">Health Monitoring</Typography>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <IconButton 
          onClick={() => navigate('/')}
          sx={{
            bgcolor: '#f5f5f5',
            '&:hover': { bgcolor: '#e0e0e0' }
          }}
        >
          <Refresh />
        </IconButton>
        <IconButton
          sx={{
            bgcolor: '#f5f5f5',
            '&:hover': { bgcolor: '#e0e0e0' }
          }}
        >
          <Share />
        </IconButton>
      </Box>

      <Box sx={{ mt: 4, textAlign: 'center' }}>
        <Typography 
          variant="body1" 
          onClick={() => navigate('/')} 
          sx={{ 
            color: '#1976d2', 
            cursor: 'pointer',
            '&:hover': { textDecoration: 'underline' }
          }}
        >
          Back to Home
        </Typography>
      </Box>
    </Box>
  );
};

export default ResultPage;