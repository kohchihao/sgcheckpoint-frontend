import React, { Component } from 'react';
import './App.css';

import Navbar from './Navbar';
import Content from './Content';
import Footer from './Footer';

class App extends Component {
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
