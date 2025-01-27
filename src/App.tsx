import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Theme } from '@mui/material';
import HomePage from './pages/HomePage';
import MonitoringPage from './pages/MonitoringPage';
import ResultPage from './pages/ResultPage';
import LoginPage from './pages/LoginPage';
import Navigation from './components/Navigation';
import { FC } from 'react';

const theme: Theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#f5f5f5',
    },
  },
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/monitoring" element={<MonitoringPage />} />
            <Route path="/result" element={<ResultPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Navigation />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
