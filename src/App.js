import React, {useEffect, useState} from 'react'
import {Row, Col} from 'reactstrap'
import logo from './logo.svg';
import './App.css';
import NASA from './components/NASA/NASA';
import Weather from './components/Weather/Weather';
import Restaurants from './components/Restaurants/Restaurants';
import Sitebar from './components/Sitebar/Sitebar'



function App() {
  const [pos, setPos] = useState({lat: "", long: ""})
  

    const  getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords)
      } else {
        alert('GeoLocation not enabled');
      }
    }
    
    const getCoords = (pos) => {
      console.log(pos.lat)
      setPos({
        lat: pos.coords.latitude,
        long: pos.coords.longitude
      })
  
    }
    useEffect(() => {
      getLocation();
    }, [])
    console.log(pos.lat)
    console.log(pos.long)

  return (
    <div>
    <Sitebar />
    <div className="cards">
    <h1>Your current location is Indianapolis, Indiana</h1>
    <br/>
    <Row >
    <Col sm="4"> <Weather lat={pos.lat} long={pos.long} /> </Col> 
    <Col sm="4">  <NASA lat={pos.lat} long={pos.long}/> </Col>
    <Col sm="4">  <Restaurants lat={pos.lat} long={pos.long}/> </Col>
    
   
  </Row>
  <div>
      
        </div>
    </div>
  
    
    </div>
  
  );
}

export default App;
