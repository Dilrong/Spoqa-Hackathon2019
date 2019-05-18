import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Cake } from './pages';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Cake}/>
      </div>
    </Router>
  );
}

export default App;
