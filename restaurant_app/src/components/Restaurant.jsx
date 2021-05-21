import React, { Component } from 'react';
import apiKey from '../keys/apiKey.js';
import _restaurantID from '../keys/restaurantID'

class Restaurant extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            phone: '',
            priceRange: ''
        }
    }
     // Function to fetch data from documenu API
     async componentDidMount(){
        const key = apiKey
        const restaurantID = _restaurantID
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()




        this.setState({
            name: data.result.restaurant_name,
            phone: data.result.restaurant_phone,
            priceRange: data.result.price_range
        })

    }

    render() {
        return (
            <div className="title">
               {this.state.name}
            </div>
        );
    }
}

export default Restaurant;