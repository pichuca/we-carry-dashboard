import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";  
import NavigationMenu from './components/navigation-menu/NavMenu';
import './App.css';

// Sections components
import Inventory from './components/sections/inventory/Inventory';
import Orders from './components/sections/orders/Orders';
import Entries from './components/sections/entries/Entries';
import Reports from './components/sections/reports/Reports';
import Configurations from './components/sections/configurations/Configurations';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            {/* COMPONENTS: */}
            <NavigationMenu />

            {/* ROUTES: */}
            <Route exact path="/inventory" component={Inventory} />
            <Route path="/orders" component={Orders} />
            <Route path="/entries" component={Entries} />
            <Route path="/reports" component={Reports} />
            <Route path="/configurations" component={Configurations} />
        </div>
      </Router>
    );
  }
}

export default App;
