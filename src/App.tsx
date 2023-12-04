import React from 'react';
import './App.css';
import ContentSection from './components/contentSection';
import Footer from './components/footer';
import NavigationSection from './components/navigationSection';
import TopBar from './components/topBar';

function App() {
  return (
    <main className='container'>
      <TopBar />
      <NavigationSection />
      <ContentSection />
      <Footer />
    </main>
  );
}

export default App;
 