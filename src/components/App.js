import React, { Component } from 'react';
import styles from './App.css';
// import Character from './Character';
import MapCharacters from './MapCharacters';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <>
        <Header /> 
        <div className={styles.cardsContainer}> 
          {MapCharacters}
        </div>
        <Footer />
      </>
    );
  }
}

export default App;
