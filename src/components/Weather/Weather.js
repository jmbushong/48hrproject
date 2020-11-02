import React, {useState, useEffect} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';
const Weather = (props) => {
  const [currentWeather, setCurrentWeather]= useState('');
  const[button, setButton]= useState(false);
  const [units, setUnits] = useState('imperial')
  //add a useState here. Use default false
    const key = '39f3730b34fe49d842602e2754374ec2'
    const latitude= props.lat;
    const longitude= props.long;
    const getWeather = (props) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}&units=${units}`)
        .then(res=> res.json())
        .then((json) => {
          console.log(json)
          setCurrentWeather(json.weather.main)})
        .catch((err) => {
            console.log(err)
        })
    }
    let fahrenheit = (currentWeather-273.15*1.8+32);
    let celsius = currentWeather - 273.15;
useEffect(() => {
    getWeather();
  }, [props.coord])
    return (
      <div className="main">
      <Card>
      <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
      <CardBody>
        <CardTitle>TEMPERATURE</CardTitle>
        <CardSubtitle>{button === true ? 'Fahrenheit': 'Celsius'}</CardSubtitle>
        <CardText>
          {button === true ? fahrenheit : celsius}
        </CardText>
        {/* <Button onClick={(e)=> {button === true ? setButton(false): setButton(true)}}>Temps</Button> */}
      </CardBody>
    </Card>
      </div>
    );
 }
export default Weather;