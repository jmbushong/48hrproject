import React, {useEffect, useState} from 'react'
import {Row, Col} from 'reactstrap'

import './App.css';
import NASA from './components/NASA/NASA';
import Weather from './components/Weather/Weather';
import {BrowserRouter as Router } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantPieces from './components/Restaurants/RestaurantPieces';



function App() {
  const locationKey= 'prj_live_pk_ee962ff8986f661f6a8037800a4e5e279c6cbac2'
  const [pos, setPos] = useState({lat: "", long: ""})

  const [showRestaurants, setShowRestaurants] = useState(false);

  const[button, setButton]= useState(false);
  const[locationName, setLocationName]= useState('');
 
  

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


    const toggle = () => setShowRestaurants(!showRestaurants);
const rest = () => {

    return (
    <div>
    <div className="cards">
    
   
    
    
     
    <Col sm="3">  <RestaurantPieces coord={pos} lat={pos.lat} long={pos.long} viewRestaurants={toggle}/> </Col>
    
   
  
  <br/>
  { showRestaurants && (<Restaurants coord={pos} lat={pos.lat} long={pos.long}/>)}
  <div>
  
}
  
    
    const fetchLocation = () => {
      fetch(`https://api.radar.io/v1/geocode/reverse?coordinates=${pos.lat},${pos.long}`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'prj_live_pk_ee962ff8986f661f6a8037800a4e5e279c6cbac2'
        })
      })
      .then((res)=> res.json())
      .then((json) => setLocationName(json))}
      
      useEffect(() => {
        fetchLocation();
        console.log(pos.lat);
        console.log(pos.long);
      }, [pos]) 

      const showCards=() =>{
        return (button === true ? 
       <div className="cards"><h1 className="city">{locationName.addresses[0].city}, {locationName.addresses[0].state}</h1>
       <Row className="cardPlacement" >
       <Col sm="3">  <NASA coord={pos} lat={pos.lat} long={pos.long}/> </Col>
       <Col sm="3"> <Weather coord={pos} lat={pos.lat} long={pos.long} /> </Col> 
       {rest()}
     </Row>
       </div>
       
     : <div className= "main" >
     <div className="landing">
     <div className="heading"> <h1 className="title">EXPLORE YOUR SURROUNDINGS </h1> <div className="homeButton"> <a onClick={(e)=> setButton(true)}><i className="fab fa-wpexplorer"></i></a></div></div>
      
  
     </div>
     </div>
        
      )
      }
  return (
 
    <div >
    
    {showCards()}
  
    </div>
  
  );
}

export default App;
