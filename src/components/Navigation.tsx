import React, { useEffect, useState } from 'react';
import { Paper, BottomNavigation, BottomNavigationAction, Box } from '@mui/material';
import { Home, Timeline, Person, Login } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const checkLoginStatus = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', checkLoginStatus);
    return () => window.removeEventListener('storage', checkLoginStatus);
  }, []);

  return (
    <Paper 
      sx={{ 
        position: 'fixed', 
        bottom: 0, 
        left: '50%', 
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '600px',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
      }} 
      elevation={3}
    >
      <BottomNavigation
        value={location.pathname}
        onChange={(event, newValue) => {
          navigate(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          value="/"
          icon={<Home />}
        />
        {isLoggedIn ? (
          <>
            <BottomNavigationAction
              label="Stats"
              value="/stats"
              icon={<Timeline />}
            />
            <BottomNavigationAction
              label="Profile"
              value="/profile"
              icon={<Person />}
            />
          </>
        ) : (
          <BottomNavigationAction
            label="Login"
            value="/login"
            icon={<Login />}
          />
        )}
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;