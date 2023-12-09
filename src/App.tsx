import React from 'react';
import './App.css';
import ContentSection from './components/contentSection';
import TopBar from './components/topBar';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Home from './pages/home';
import MoodTracking from './pages/moodTracking';
import MyAchievements from './pages/myAchievements';
import RecognitionHub from './pages/recognitionHub';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import SwipeableTemporaryDrawer from './components/drawer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: { main: '#18181b' },
    secondary: { main: '#dd47ca' },
  },
  typography: {
    h1: {
      fontSize: 36,
      fontWeight: 700,
    },
    h2: {
      fontSize: 24,
      fontWeight: 600,
    },
    body1: {
      fontSize: 14,
      fontWeight: 400,
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <SwipeableTemporaryDrawer />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<ContentSection />}></Route>
          <Route path="/moodtracking" element={<MoodTracking />}></Route>
          <Route path="/myachievements" element={<MyAchievements />}></Route>
          <Route path="/recognitionhub" element={<RecognitionHub />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
 