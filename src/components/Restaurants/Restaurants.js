import React, {useState} from 'react'

const baseURL = '';
const key = 'b8dcedfb7841301a3a9cdf35f1feef2f';
// const lat = '39.8174033';
// const lon = '-86.1603249';

const Restaurant = () => {

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
    }

    return(
        <div className="main">
            <div clasName="mainDiv">

            </div>
        </div>
    )
   
}

export default Restaurant;