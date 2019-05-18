import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Cake, Firework, Applause } from './pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Cake}/>
        <Route exact path="/firework" component={Firework}/>
        <Route exact path="/applause" component={Applause}/>
      </div>
    </Router>
  );
}

export default App;
