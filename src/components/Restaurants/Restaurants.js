import React, {useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button} from 'reactstrap';

const baseURL = '';
const key = 'b8dcedfb7841301a3a9cdf35f1feef2f';
// const lat = '39.8174033';
// const lon = '-86.1603249';


const Restaurants = () => {
    const [results, setResults] = useState('');
    const [lat, setLat] = useState('39.8174033');
    const [lon, setLon] = useState('-86.1603249');


    const fetchRestuarants = () => {
        let url = `${baseURL}?api-key=${key}?lat=${lat}$lon=${lon}`;

        fetch(url)
        .then(res => res.json())
        .then(resjson => {
            if(resjson.status === "OK"){
                return setResults(resjson.restuarants)
            }else {
                console.log(resjson.errors);
            }
        })
        .catch(err => console.log(err));
    };

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
    </div>
    );
   
}

export default Restaurants;