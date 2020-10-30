import React, {useEffect, useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col} from 'reactstrap';


const baseURL = 'https://developers.zomato.com/api/v2.1/geocode';
const key = 'b8dcedfb7841301a3a9cdf35f1feef2f';
//const lat = '39.825567500000005';
//const lon = '-86.1649924';


const Restaurants = (props) => {
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const fetchRestuarantImage = () => {
            let url = `${baseURL}?api-key=${key}?lat=${props.location?.lat}&lon=${props.location?.long}`;
    
            fetch(url, {
                method:'GET',
                headers: {'user-key': key}
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setResults(data.nearby_restaurants)
            })
            .catch(err => console.log(err));
        };

        fetchRestuarantImage();
    },[]);
        
    
    console.log(results);

    return (
        <div>
            <Row>
            {
                results.map( r => (
                    <Col lg="3" md="4" sm="6" className="m-2">
                    <Card>
                        <CardImg top width="100%" src={r.restaurant.thumb} alt="restaurant-image" />
                        <CardBody>
                            <CardTitle>{r.restaurant.name}</CardTitle>
                            <CardSubtitle>Name: tuyio</CardSubtitle>
                            <CardText>Cuisines: rtyui</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    </Col>
                    )
                )
            }
                    
                
            </Row>    
        </div>
    );
   
}

export default Restaurants;