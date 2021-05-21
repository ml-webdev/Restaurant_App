import React, { Component } from 'react';
import apiKey from '../keys/apiKey.js';
import _restaurantID from '../keys/restaurantID'
class Call extends Component {
    constructor(){
        super()
        this.state = ({
            phone: 'Loading...'
        })
    }
    async componentDidMount(){
        const key = apiKey
        const restaurantID = _restaurantID
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()
        var _phone = data.result.restaurant_phone
        console.log(_phone)
        this.setState({
            phone: _phone
        })
        }
    render() {
        return (
            <div className="container">
                <h1 className="heading">Call Us</h1>
                <div className="call-us">
                    <div className="call-us-1">+1</div>
                    <div className="call-us-2">{this.state.phone}</div>
                    <div className="call-us-3">Call</div>
                </div>
            </div>
        );
    }
}

export default Call;