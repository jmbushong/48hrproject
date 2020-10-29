import React, {useState} from 'react'
import {Row, Col} from 'reactstrap'
import logo from './logo.svg';
import './App.css';
import NASA from './components/NASA/NASA';
import Weather from './components/Weather/Weather';
import {BrowserRouter as Router } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import Sitebar from './components/Sitebar/Sitebar';

function App() {
  const [pos, setPos] = useState({lat: "", long: ""})
  
    //add useEffect for getLocation()

    const  getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords)
      } else {
        alert('GeoLocation not enabled');
      }
    }

    
    const getCoords = (pos) => {
      console.log(pos)
      setPos({
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      })
    }

  return (
    <div>
      <Router>
        <Sitebar />
      </Router>
      
      <div className="cards">
        <h1>Your current location is Indianapolis, Indiana</h1>
        <br/>
        <Row >
          <Col sm="4"> <Weather location={pos} /> </Col>
          <Col sm="4">  <NASA /> </Col>
          <Col sm="4">  <Restaurants /> </Col>
        </Row>
      </div>
      <div>
        <br/>
          <button onClick={getLocation}>Click me</button>
          <p>lat: {pos.lat}</p>
          <p>long {pos.long}</p>
      </div>
    
    </div>
  
  );
}

export default App;
