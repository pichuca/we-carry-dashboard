import React, { Component } from 'react';
import { BrowserRouter as Router } from "react-router-dom";  
import NavigationMenu from './components/navigation-menu/NavMenu';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {/* COMPONENTS: */}
            <NavigationMenu />
        </div>
      </Router>
    );
  }
}

export default App;
