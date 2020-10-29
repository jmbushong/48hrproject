import React from 'react'
import logo from './logo.svg';
import './App.css';
import Sitebar from './components/Sitebar/Sitebar';
import NASA from './components/NASA/NASA';
import Restaurants from './components/Restaurants/Restaurants';
import Weather from './components/Weather/Weather';
import {BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div >
    <Router>
      <Sitebar />
    </Router>
    
    <NASA />
    <Restaurants />
    <Weather />
    
    </div>
  );
}

export default App;
