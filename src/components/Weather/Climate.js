import React, { useEffect } from 'react'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col} from 'reactstrap';


const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
const key = '39f3730b34fe49d842602e2754374ec2';
const units = 'imperial';

const Climate = (props) => {
    const [temperature, setTemperature] = React.useState({});

    useEffect(() => {
        const fetchWeatherImage = () => {
        let url = `${baseURL}?lat=${props.lat}&lon=${props.lon}&appid=${key}`
    
        fetch(url)
            .then(data => setTemperature(data))
            .catch(err => console.log(err));
        }
        
        fetchWeatherImage();
    },[props] );

        console.log(temperature);

        let showMe = true;


    return(
        <div>

<Card>
        <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
           { showMe && (<Card></Card>)}
        </div>
        
    )
}

export default Climate;