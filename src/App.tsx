import React from 'react';
import './App.css';
import ContentSection from './components/contentSection';
import Footer from './components/footer';
import TopBar from './components/topBar';
import SignIn from './pages/signIn';
import SignUp from './pages/signUp';
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
          <Route path="/" element={<Footer />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/dashboard" element={<ContentSection />}></Route>
          <Route path="/moodtracking" element={<ContentSection />}></Route>
          <Route path="/recognition" element={<ContentSection />}></Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
 