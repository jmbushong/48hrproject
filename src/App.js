import React, {useEffect, useState} from 'react'
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
  const[button, setButton]= useState(false);

  


 const showCards=() =>{
   return (button === true ? 
  <div className="cards"><h1>Indianapolis, Indiana</h1>
  <Row className="cardPlacement" >
  <Col sm="3">  <NASA coord={pos} lat={pos.lat} long={pos.long}/> </Col>
  <Col sm="3"> <Weather lat={pos.lat} long={pos.long} /> </Col> 
  <Col sm="3">  <Restaurants lat={pos.lat} long={pos.long}/> </Col>
</Row>
  </div>
  
: <div className= "main" ><h1 className="title">EXPLORE YOUR </h1> <h1 className="title"> SURROUNDINGS </h1> 
<a className="homeButton" onClick={(e)=> setButton(true)}><i class="fab fa-wpexplorer"></i>
</a></div>
   
 )
 }
 
  

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

    
    // console.log(pos.lat)
    // console.log(pos.long)

  return (
 
    <div >
 
    
    {showCards()}
    
    
  
    </div>
  
  );
}

export default App;
