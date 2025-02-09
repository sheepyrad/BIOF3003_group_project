import React, { useEffect, FC } from 'react';
import { Box, Typography, Paper, Link, Button } from '@mui/material';
import { FavoriteOutlined, Lock, LogoutOutlined } from '@mui/icons-material';
import HeartRateChart from '../components/HeartRateChart';
import { useNavigate } from 'react-router-dom';

const HomePage: FC = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const handleStorageChange = (): void => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  return (
    <Box sx={{ 
      p: 2, 
      pb: 7, 
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #f8f9fc 0%, #b0c4de 100%)',
      fontFamily: '"SF Pro Display", "Inter", -apple-system, BlinkMacSystemFont, sans-serif'
    }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ textAlign: 'left' }}>
          <Typography variant="h5" sx={{ fontWeight: 500, mb: 0.5 }}>
            Good Morning{isLoggedIn ? ', Admin!' : '!'}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {currentDate}
          </Typography>
        </Box>
        {isLoggedIn ? (
          <Button
            variant="outlined"
            onClick={() => {
              localStorage.removeItem('isLoggedIn');
              setIsLoggedIn(false);
              window.dispatchEvent(new Event('storage'));
            }}
            startIcon={<LogoutOutlined />}
            sx={{
              color: '#1976d2',
              borderColor: '#1976d2',
              '&:hover': {
                borderColor: '#1565c0',
                bgcolor: 'rgba(25, 118, 210, 0.04)'
              }
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            variant="outlined"
            onClick={() => navigate('/login')}
            sx={{
              color: '#1976d2',
              borderColor: '#1976d2',
              '&:hover': {
                borderColor: '#1565c0',
                bgcolor: 'rgba(25, 118, 210, 0.04)'
              }
            }}
          >
            Login
          </Button>
        )}
      </Box>

      <Paper 
        onClick={() => navigate('/monitoring')}
        sx={{ 
          p: 2, 
          mb: 2, 
          borderRadius: 2, 
          bgcolor: 'white',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: '#f5f5f5'
          }
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <FavoriteOutlined sx={{ color: '#e4a6a6', mr: 1, fontSize: 32 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>ausculto</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
              Conduct health monitoring with your phone
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{ p: 2, mb: 2, borderRadius: 2, bgcolor: 'white' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Lock sx={{ mr: 1 }} />
          <Box>
            <Typography variant="subtitle1" sx={{ textAlign: 'left' }}>xinio (Coming Soon)</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
              Connect with ECG to get your electrocardiogram
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Paper sx={{ p: 2, mb: 2, borderRadius: 2, bgcolor: 'white' }}>
        <Typography variant="h6" sx={{ mb: 2, textAlign: 'left' }}>Avg. Heart Rate</Typography>
        <HeartRateChart />
      </Paper>

      <Paper sx={{ p: 2, borderRadius: 2, bgcolor: '#f8f9fc' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" sx={{ textAlign: 'left' }}>My Doctor</Typography>
          <Link href="#" sx={{ color: '#1976d2', textDecoration: 'none' }}>Manage</Link>
        </Box>
        <Typography variant="body1" sx={{ textAlign: 'left' }}>Doctor Chan Tai Man</Typography>
      </Paper>
    </Box>
  );
};

export default HomePage;