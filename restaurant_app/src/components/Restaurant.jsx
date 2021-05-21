import React, { Component } from 'react';
import apiKey from '../keys/apiKey.js';

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
        const restaurantID = 4060476073969310
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()


        console.log("-----" + data.result.restaurant_name)
        console.log("-----" + data.result.restaurant_phone)
        console.log("-----" + data.result.price_range)

        this.setState({
            name: data.result.restaurant_name,
            phone: data.result.restaurant_phone,
            priceRange: data.result.price_range
        })
        // To access properties, must use "data.result." and then the property name
        // console.log(data.result.restaurant_name)
        // console.log(data.result.restaurant_phone)
        // console.log(data.result.price_range)
        // var _name = data.result.restaurant_name
        // var _phone = data.result.restaurant_phone
        // var _price_range = data.result.price_range
        // console.log(_name)
        // console.log(_phone)
        // console.log(_price_range)

    }
    // Will need to make this not hard-coded
    // var restID = "4060476073969310"
    // var restObj = fetchAPI(restID, apiKey)
    
    // console.log("data " + Object.keys(restObj))
    render() {
        return (
            <div>
               {this.state.name}
            </div>
        );
    }
}

export default Restaurant;