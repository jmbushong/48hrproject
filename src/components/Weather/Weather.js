import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

// baseURL = api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ee6006ca611107ec92d5d3cfd766f153
// }
// ee6006ca611107ec92d5d3cfd766f153

const WeatherComponent = () => {


    const fetcher = () => {
        fetch (`api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={ee6006ca611107ec92d5d3cfd766f153`)
        .then(res => res.json())
        .then(json => {
            console.log(json)
            // setResults(json);
        })
    }


    return (

        <div className="main">
            <div className="mainDiv">

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
    </div>

            </div>

        </div>
    )
}

export default WeatherComponent;
