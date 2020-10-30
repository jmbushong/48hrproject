import React, {useState, useEffect} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';


const NASA= (props) =>{

  const [picture, setPicture]= useState('');

 const key = 'IwdNlEOiyB7TwhRcpPuOdQn80jo3LSB7csAeuY60'
 const latitude= props.lat;
 const longitude= props.long;



  const fetchImage = () => {
    fetch(`https://api.nasa.gov/planetary/earth/assets?lon=${longitude}&lat=${latitude}&date=2020-06-01&api_key=${key}`)
    .then((res)=> res.json())
    .then((json) => setPicture(json))}

  
    useEffect(() => {
      fetchImage();
      console.log(latitude);
      console.log(longitude);
    }, [props.coord]) //I had to add props here because my fetch was running before long & lat could be pulled in
    console.log(picture)
    console.log(picture.url)
    
    return(   
         <div>
        <Card className="card">
          <CardImg top width="100%" src={picture.url} alt="Card image cap" />
          <CardBody>
            <CardTitle className="cardTitle">SATELITE IMAGE </CardTitle>
            <CardSubtitle></CardSubtitle>
            <CardText></CardText>
            
          </CardBody>
        </Card>
      </div>

    )

}

export default NASA;