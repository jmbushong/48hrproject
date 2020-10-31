import React, {useState, useEffect} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
// import WeatherButton from '../WeatherButton';



// baseURL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ee6006ca611107ec92d5d3cfd766f153
// }
// ee6006ca611107ec92d5d3cfd766f153

const Weather = (props) => {

  const [currentWeather, setCurrentWeather]= useState('');
  const[button, setButton]= useState(false);

  const [ fahrenheit, setFahrenheit] = useState('')
  const [ celsius, setCelsius] = useState('')

  //add a useState here. Use default false
  const showCards=() =>{
    return (
        // const toggleTemp = () => {
        //     <div><a className="homeButton" onClick={(e)=> setButton(true)}>Fahrenheit
        //      </a></div> : <div><a className="homeButton" onClick={(e)=> setButton(true)}>Celsius</a></div>
        //      }
        button === true ? 
   <div>
        <a onClick={(e)=> setButton(false)}>Goodbye</a>
   </div>
   
 :  <div> 
     {/* <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>TEMPERATURE</CardTitle>
          <CardSubtitle>Fahrenheit</CardSubtitle>
          <CardText>
            {props.lat}
            {props.long}
          </CardText>
          <Button>{showCards()}</Button>
        </CardBody>
      </Card>
    </div> */}
        <a onClick={(e)=> setButton(true)}>Celsius</a>
    </div>
  )
  }


    const key = '2e207a6f28aa4466916a861930cf982c'
    const latitude= props.lat;
    const longitude= props.long;

    const getWeather = (props) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
        .then((res)=> res.json())                                
        .then((json) => console.log(json))}
    

useEffect(() => {
    getWeather();
    console.log(latitude);
    console.log(longitude);
  }, [props.coord]) //I had to add props here because my fetch was running before long & lat could be pulled in
  console.log(currentWeather)
  console.log(currentWeather.url)

    return (

        <div className="main">
            <div className="mainDiv">

            <div>
      <Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.
            {props.lat}
            {props.long}
          </CardText>
          <Button></Button>
        </CardBody>
      </Card>
    </div>

            </div>

        </div>
    )
    }
    


export default Weather;

