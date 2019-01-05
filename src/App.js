import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

import ReactGA from 'react-ga';

class App extends Component {

  constructor(props) {
    super(props);
    this.initializeReactGA();
  }

  initializeReactGA = () => {
    ReactGA.initialize('UA-69828666-1');
    ReactGA.pageview('/');
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App;
