import React, { useEffect } from 'react';
import './App.css';

import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import ReactGA from 'react-ga';

const App = () => {
  const initializeReactGA = () => {
    ReactGA.initialize('UA-69828666-1');
    ReactGA.pageview('/');
  };

  useEffect(() => {
    initializeReactGA();
  },[])

  return (
    <div className="App">
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
