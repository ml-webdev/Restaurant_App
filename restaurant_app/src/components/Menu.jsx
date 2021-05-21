import React, { Component } from 'react';
import MenuCards from './MenuCards';
import apiKey from '../keys/apiKey.js';
import _restaurantID from '../keys/restaurantID'
class Menu extends Component {
    constructor(){
        super()
        this.state = ({
            name: '',
            price: ''
        })
    }
    async componentDidMount(){
        const key = apiKey
        const restaurantID = _restaurantID
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()

        var menu_section_19 = data.result.menus[0].menu_sections[19]
        console.log("-----" + menu_section_19.section_name)
        const menuObjects = menu_section_19.menu_items.map((item)=>{
            console.log(item.name)
            console.log(item.pricing[0].priceString)
            {
            <div>
                {/* <h1>{item.name}</h1>
                <p>{item.pricing[0].priceString}</p> */}
                {this.setState({
                    name: item.name,
                    price: item.pricing[0].priceString
                })}
            </div>
            }
        })
        console.log(menuObjects)




    }

    render() {
        return (
            <div className="container">
                <h1 className="heading">Menu</h1>
                <div className="menu-container">
                    <div className="row1">
                        <MenuCards name={this.state.name} price={this.state.price}/>
                    </div>
                    {/* <div className="row1">
                        <MenuCards name="Card 1"/>
                        <MenuCards name="Card 2"/>
                        <MenuCards name="Card 3"/>
                    </div>
                    <div className="row2">
                        <MenuCards name="Card 4"/>
                        <MenuCards name="Card 5"/>
                        <MenuCards name="Card 6"/>
                    </div>
                    <div className="row3">
                        <MenuCards name="Card 7"/>
                        <MenuCards name="Card 8"/>
                        <MenuCards name="Card 9"/>

                    </div> */}
                </div>
            </div>
        );
    }
}

export default Menu;