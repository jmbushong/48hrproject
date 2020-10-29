import React from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

const NASA= (props) =>{
 const key = 'Ddyvj6Bw0Y7FnWKBfpwzn6llLCb5Z8Y8Hcv8iTqc'
 console.log(props.lat)
  const fetchImage = () => {
    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${props.long}&lat=${props.lat}&api_key=${key}`)
    .then((res)=> res.json())
    .then((json) => displayJSON(json))}

    function displayJSON(json){
      console.log(json.url);
      
    }
    fetchImage()
    
    return(   
         <div>
        <Card>
          <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardTitle>NASA</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>Insert text here</CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>

    )
}

export default NASA;