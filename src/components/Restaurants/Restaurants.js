import React, {useEffect, useState} from 'react';
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button, Row, Col} from 'reactstrap';
import RestaurantInfo from "./RestaurantInfo.js";
import Starrating from './Starrating'

const baseURL = 'https://developers.zomato.com/api/v2.1/geocode';
const key = 'b8dcedfb7841301a3a9cdf35f1feef2f';
//const lat = '39.825567500000005';
//const lon = '-86.1649924';


const Restaurants = (props) => {
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const fetchRestuarantImage = () => {
            let url = `${baseURL}?api-key=${key}?lat=${props.lat}&lon=${props.long}`;
    
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
    },[props]);
    
    let staticImgUrl = 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

    // function that takes a string, checks if it's empty. If empty, return some static string, else return the input string
    const placeHolderImg = (thumbUrl) => {
        return (thumbUrl === '') ? staticImgUrl : thumbUrl;
    };

    console.log(results);

    const [modal, setModal] = React.useState(false);

    const [modalData, setModalData] = React.useState([]);
  
    const toggle = () => setModal(!modal);

    return (
        <div className="container-fluid">
            <Row>
            {
                results?.map( (r, index) => (
                    <Col sm="6" md="4" lg="3" className="m-2" id={`col${index++}`}>
                        <Card>
                            {/* <CardImg top width="100%" src={placeHolderImg(r.restaurant.thumb)} alt="restaurant-image" /> */}
                            <CardBody>
                                <CardTitle>{r.restaurant.name}</CardTitle>
                                <CardSubtitle className="text-muted">Consumer Rating: {r.restaurant.user_rating.aggregate_rating} [<b>{r.restaurant.user_rating.rating_text}</b>]</CardSubtitle>
                                <CardText>Location:  {r.restaurant.location.address}</CardText>
                                <Button onClick={()=>{setModalData(r.restaurant);setModal(true);}}>More Information</Button>
                            </CardBody>
                            <CardBody>
                                <CardTitle>{r.restaurant.name}</CardTitle>
                                <CardSubtitle className="text-muted">Consumer Rating: {r.restaurant.user_rating.aggregate_rating} [<b>{r.restaurant.user_rating.rating_text}</b>]</CardSubtitle>
                                <CardText>Location:  {r.restaurant.location.address}</CardText>
                                <Button onClick={()=>{setModalData(r.restaurant);setModal(true);}}>More Information</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    )
                )
            }
        //     </Row>   
        //     <RestaurantInfo toggle = {toggle} modal = {modal} restaurant = {modalData} />
        // </div>
    );
   
}



  


export default Restaurants;