import React from 'react';
import { Paper, BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Home, Timeline, Person } from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';

const Navigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Paper 
      sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} 
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
      </BottomNavigation>
    </Paper>
  );
};

export default Navigation;