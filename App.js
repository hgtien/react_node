import React from 'react';
import './App.css';
import Home from './Home';
import About from './About';
import {Product} from './Product';
import Nav from './Nav';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/product" component={Product} />
      </div>
    </Router>
    );
}

export default App;
