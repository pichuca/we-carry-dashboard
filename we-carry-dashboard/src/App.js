import React, { Component } from 'react';
import NavigationMenu from './components/navigation-menu/NavMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationMenu />
      </div>
    );
  }
}

export default App;
