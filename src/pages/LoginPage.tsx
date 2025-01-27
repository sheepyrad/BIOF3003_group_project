import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Checkbox, FormControlLabel, Divider, IconButton, Paper } from '@mui/material';
import { Facebook, Twitter, GitHub } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [error, setError] = useState('');

  const mockCredentials = {
    email: 'admin@test.com',
    password: 'password123'
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rememberMe' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === mockCredentials.email && formData.password === mockCredentials.password) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #f8f9fc 0%, #b0c4de 100%)',
        p: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 2,
          bgcolor: 'white',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
        }}
      >
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <img
            src="/logo192.png"
            alt="Logo"
            style={{ width: 48, height: 48, margin: '0 auto' }}
          />
          <Typography variant="h5" sx={{ mt: 2, fontWeight: 600 }}>
            Sign in to your account
          </Typography>
        </Box>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            margin="normal"
            required
            sx={{ mb: 2 }}
          />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <FormControlLabel
              control={
                <Checkbox
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  color="primary"
                />
              }
              label="Remember me"
            />
            <Typography
              variant="body2"
              sx={{
                color: '#1976d2',
                cursor: 'pointer',
                '&:hover': { textDecoration: 'underline' }
              }}
            >
              Forgot password?
            </Typography>
          </Box>

          {error && (
            <Typography color="error" sx={{ mt: 1, mb: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              py: 1.5,
              bgcolor: '#1976d2',
              '&:hover': {
                bgcolor: '#1565c0'
              }
            }}
          >
            Sign in
          </Button>
        </form>

        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Divider sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary', px: 2 }}>
              Or continue with
            </Typography>
          </Divider>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
            <IconButton
              sx={{
                border: '1px solid #e0e0e0',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <Facebook />
            </IconButton>
            <IconButton
              sx={{
                border: '1px solid #e0e0e0',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              sx={{
                border: '1px solid #e0e0e0',
                '&:hover': { bgcolor: '#f5f5f5' }
              }}
            >
              <GitHub />
            </IconButton>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;