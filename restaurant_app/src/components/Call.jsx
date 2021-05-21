import React, { Component } from 'react';

class Call extends Component {
    async componentDidMount(){
        const key = apiKey
        const restaurantID = _restaurantID
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()

        }
    render() {
        return (
            <div className="container">
                <h1 className="heading">Call Us</h1>
                <div className="call-us">
                    <div className="call-us-1">+1</div>
                    <div className="call-us-2">012-345-6789</div>
                    <div className="call-us-3">Call</div>
                </div>
            </div>
        );
    }
}

export default Call;