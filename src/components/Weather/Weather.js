import React, {useState, useEffect} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
// import WeatherButton from '../WeatherButton';



// baseURL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ee6006ca611107ec92d5d3cfd766f153
// }
// ee6006ca611107ec92d5d3cfd766f153



const Weather = (props) => {


  const [currentWeather, setCurrentWeather]= useState('');
  const[button, setButton]= useState(false);

//   const [ fahrenheit, setFahrenheit] = useState('')
//   const [ celsius, setCelsius] = useState('')

    const key = 'e41714bc7677fdb9ee66328adbb2ef0c'
    const latitude= props.lat;
    const longitude= props.long;

  const getWeather = (props) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
    .then((res)=> res.json())                                
    .then((json) => setCurrentWeather(json.main.temp))    
    .catch((err) => {
        console.log(err)
    })

}

console.log(currentWeather);
// let fahrenheit = (kelvinTemp-273.15*1.8+32);
// let celsius = kelvinTemp - 273.15;

  
    // const getWeather = (props) => {
    //     fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`)
    //     .then((res)=> res.json())                                
    //     .then((json) => setCurrentWeather(json))    
    //     .catch((err) => {
    //         console.log(err)
    //     })
    
    // }
    
   
    // const converter = (currentWeather) => {

        let fahrenheit = Math.round((currentWeather - 273.15) * 1.8 + 32);
        // let fahrenheit = (currentWeather-273.15)*1.8+32;
        let celsius = Math.round(currentWeather-273.15);

    //     if(button === false){
    //         return <p>{fahrenheit}</p>
    //     } else if (button === true){
    //     return <p>{celsius}</p>
    //     }
    //     console.log(fahrenheit)
    //     console.log(celsius)
    //     console.log(currentWeather)
    // }

// useEffect(() => {
//     getWeather();
//     // converter();
//     console.log(latitude);
//     console.log(longitude);
//   }, [props.coord]) //I had to add props here because my fetch was running before long & lat could be pulled in
//   console.log(currentWeather)
//   console.log(currentWeather.main.temp)

getWeather();

//   const kelvinTemp = currentWeather.main.temp

//   const converter = (currentWeather) => {

//     // const kelvin = currentWeather.main.temp
//     // let fahrenheit = (kelvinTemp-273.15*1.8+32);
//     // let celsius = kelvinTemp - 273.15;

//     if(button === false){
//         return fahrenheit
//     } else if (button === true){
//         return celsius
//     }
//     console.log('fahrenheit')
//     console.log('celsius')
//     console.log(kelvinTemp)
// }


          return (
      <div className="main">
      <Card>
      <CardImg top width="100%" src="https://openweather.co.uk/storage/app/media/we-are-pleased-announce-our-new-statistical-weather-data-api-now-available.png" alt="Card image cap" />
      <CardBody>
        <CardTitle>TEMPERATURE</CardTitle>
        <CardSubtitle>{button === true ? 'Fahrenheit': 'Celsius'}</CardSubtitle>
        <CardText>
          {button === true ? fahrenheit : celsius} 
          {/* {button === true ? celsius : fahrenheit} */}
        </CardText>
        <Button onClick={(e)=> {button === true ? setButton(false): setButton(true)}}>Temps</Button>
      </CardBody>
    </Card>
      </div>
    )
            {/* <Card>
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
      </Card> */}
          {/* </div>
          {showCards()}
        </div>
        {/* end of main div */}
    //    </div>
    // );
 }  
    


export default Weather;