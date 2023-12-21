import React from 'react';
import './App.css';
import ContentSection from './components/contentSection';
import Demopopup from './pages/demoPopup';
import NewTopBar from './components/newTopBar';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
import Home from './pages/home';
import MoodTracking from './pages/moodTracking';
import MyAchievements from './pages/myAchievements';
import RecognitionHub from './pages/recognitionHub';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import { Routes, Route } from 'react-router-dom';
import NewSideBar from './components/newSideBar';

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
      <div className='app-container'>
        <NewSideBar />
        <div className='content-container'>
        <NewTopBar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/register" element={<SignUp />}></Route>
            <Route path="/dashboard" element={<ContentSection />}></Route>
            <Route path="/moodtracking" element={<MoodTracking />}></Route>
            <Route path="/myachievements" element={<MyAchievements />}></Route>
            <Route path="/recognitionhub" element={<RecognitionHub />}></Route>
            <Route path="/testpopup" element={<Demopopup />}></Route>
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
 