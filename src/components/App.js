import React, { Component } from 'react';
import MapCharacters from './MapCharacters';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header /> 
        <MapCharacters />
        <Footer />
      </>
    );
  }
}

export default App;
