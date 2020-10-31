import React, {useEffect, useState} from 'react'
import {Row, Col} from 'reactstrap'
import './App.css';
import NASA from './components/NASA/NASA';
import Weather from './components/Weather/Weather';
import {BrowserRouter as Router } from 'react-router-dom';
import Restaurants from './components/Restaurants/Restaurants';
import RestaurantPieces from './components/Restaurants/RestaurantPieces';


// This is our main component that controls the landing page & main page

function App() {

//useState Variables
  const [pos, setPos] = useState({lat: "", long: ""})
  const [showRestaurants, setShowRestaurants] = useState(false);
  const[button, setButton]= useState(false);
  const[locationName, setLocationName]= useState('');
 
  
//This function will grab the user's location (lat & long) when run
    const  getLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getCoords)
      } else {
        alert('GeoLocation not enabled');
      }
    }
    
  //This function sets the user's location to the variable pos

    const getCoords = (pos) => {
      setPos( 
        {  lat: pos.coords.latitude,
          long: pos.coords.longitude}
      )
    }
    
    //This useEffect runs the getLocation function once (when the component is loaded)
    useEffect(() => {
      getLocation();
    }, [])


    //TBA- More explanation to come. 
const toggle = () => setShowRestaurants(!showRestaurants);

//Is the rest function necessary? Or could we just add this code on line 98?
const rest = () => {
    return (
    <div>
    <div className="card"> 
  
  <br/>
  { showRestaurants && (<Restaurants coord={pos} lat={pos.lat} long={pos.long}/>)}
  </div>
  </div>
  
    )
}


//This fetch grabs the coordinates stored in pos and converts them to a city and state name  

const fetchLocation = () => {
      fetch( `https://api.radar.io/v1/geocode/reverse?coordinates=${pos.lat},${pos.long}`, {
        method: 'GET',
        headers: new Headers({
          'Authorization': 'prj_live_pk_ee962ff8986f661f6a8037800a4e5e279c6cbac2'
        })
      })
      .then((res)=> res.json())
      .then((json) => setLocationName(json))
      .catch((error) => console.log('error'))}
     
      //This useEffect runs the above fetch when the component loads & when the variable pos is updated. In this case you'll see a message in the console saying that our fetch initially failed. This is because the fetch ran before the user's location was logged. The fetch then runs a second time once the location info has been updated. 
      
      useEffect(() => {
        try{
          fetchLocation();
        }catch(e){
          console.log('error');
        }
        
      }, [pos]) 

   
     //This function controls the switch from our landing page to the main page. This is controlled through logic that utilizes an onClick, useState boolean values and a ternary. 
     
      const showCards=() =>{
        return (button === true ? 
       <div className="cards"><h1 className="city">{locationName.addresses[0].city}, {locationName.addresses[0].state}</h1>
       <Row className="cardPlacement" >
       <Col sm="3">  <NASA coord={pos} lat={pos.lat} long={pos.long}/> </Col>
       <Col sm="3"> <Weather coord={pos} lat={pos.lat} long={pos.long} /> </Col> 
       <Col sm="3">  <RestaurantPieces coord={pos} lat={pos.lat} long={pos.long} viewRestaurants={toggle}/> </Col>
       {rest()}
     </Row>
       </div>
       
     : <div className= "main" >
     <div className="landing" onClick={(e)=> setButton(true)}>
     <div className="heading"> <h1 className="title">EXPLORE YOUR SURROUNDINGS </h1><div className="homeButton"> <a ><i className="fab fa-wpexplorer"></i></a></div></div>
      
  
     </div>
     </div>
        
      )
      }
//This is the RETURN for APP.JS. This is where the function showCards() is called and printed to the DOM

  return (
    <div>
    
    {showCards()}
  
    </div>
  
  );
}

export default App;
