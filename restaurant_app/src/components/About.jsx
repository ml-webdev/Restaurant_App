import React, { Component } from 'react';
import apiKey from '../keys/apiKey.js';
import _restaurantID from '../keys/restaurantID'


class About extends Component {
    constructor(){
        super()
        this.state = ({
            hours: 'Daily: ',
            priceRange: '',
            cuisines: ["Loading..."],
            address: "",
            lat: null,
            lon: null,
            website: ''
        })
    }
    async componentDidMount(){
        const key = apiKey
        const restaurantID = _restaurantID
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()

        // set new state
        var _hours = data.result.hours
        var _priceRange = data.result.price_range
        var _cuisines = data.result.cuisines
        var _address = data.result.address.formatted


        var _website = data.result.restaurant_website

        this.setState({
            hours: _hours,
            priceRange: _priceRange, 
            cuisines: _cuisines,
            address: _address,
            website: _website
        })
        }
    
    render() {
        return (
            <div className="container">
                <h1 className="heading">About</h1>
                <h1 className="cuisines">{this.state.cuisines.join(' | ')}</h1>
                <div className="about-bottom">
                   <div className="priceRange">Price: {this.state.priceRange}</div>
                   <div className="about-info">
                       <ul>
                           <li>{this.state.address}</li>
                           <li>Hours: {this.state.hours}</li>
                           <li className="website"><span><a href={this.state.website} target="_blank" rel="noreferrer">Website</a></span></li>
                       </ul>
                   </div>
                   <div className="maps" id="map">Maps</div>
                </div>
            </div>
        );
    }
}

export default About;