import React from 'react';
import './App.css';
import ContentSection from './components/contentSection';
import Footer from './components/footer';
import TopBar from './components/topBar';
import { ThemeProvider } from '@mui/material/styles';
import createTheme from '@mui/material/styles/createTheme';
import SwipeableTemporaryDrawer from './components/drawer';

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
      <div className='slot'>
      <TopBar />
      <SwipeableTemporaryDrawer />
      <ContentSection />
      <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
 