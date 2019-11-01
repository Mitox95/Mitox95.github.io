import React from 'react';
import Home from './components/home';
import Lines from './components/lines';
import Line from './components/line';
import {BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Stop from './components/stop';
import Time from './components/time';


function App() {
  return (
    <div className="App">
     
      <Router>
      <Home />
        <Route exact path="/lines" component={Lines} />
        <Route exact path="/line/:lineId" component={Line} />    
        <Route exact path="/line/:lineId/:stopId" component={Stop} />
        <Route exact path="/line/:lineId/:stopId/:timeId" component={Time} />
      </Router>
      
    </div>
  );
}

export default App;
