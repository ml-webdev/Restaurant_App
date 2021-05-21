import React, { Component } from 'react';
import MenuCards from './MenuCards';
import apiKey from '../keys/apiKey.js';
import _restaurantID from '../keys/restaurantID'
class Menu extends Component {
    constructor(){
        super()
        this.state = ({
            name: [],
            price: []
        })
    }
    async componentDidMount(){
        const key = apiKey
        const restaurantID = _restaurantID
        const url = `https://api.documenu.com/v2/restaurant/${restaurantID}?key=${key}`
        const response = await fetch(url)
        var data = await response.json()

        var menu_section = data.result.menus[0].menu_sections[10]
        console.log("-----" + menu_section.section_name)
        var menuNameArr = []
        var menuPriceArr = []
        const menuObjects = menu_section.menu_items.map((item)=>{
            // console.log(item.name)
            menuNameArr.push(item.name)
            // console.log(item.pricing[0].priceString)
            menuPriceArr.push(item.pricing[0].priceString)
            
            return (<div>
                {/* <h1>{item.name}</h1>
                <p>{item.pricing[0].priceString}</p> */}
                {this.setState({
                    name: menuNameArr,
                    price: menuPriceArr
                })}
            </div>)
            
        })
        console.log(menuObjects)




    }

    render() {
        return (
            <div className="container">
                <h1 className="heading">Menu</h1>
                <div className="menu-container">
                    <div className="row">
                        {(this.state.name[0] != null) && <MenuCards name={this.state.name[0]} price={this.state.price[0]}/>}
                        {(this.state.name[1] != null) && <MenuCards name={this.state.name[1]} price={this.state.price[1]}/>}
                        {(this.state.name[2] != null) && <MenuCards name={this.state.name[2]} price={this.state.price[2]}/>}
                    </div>
                    <div className="row">
                        {(this.state.name[3] != null) && <MenuCards name={this.state.name[3]} price={this.state.price[3]}/>}
                        {(this.state.name[4] != null) && <MenuCards name={this.state.name[4]} price={this.state.price[4]}/>}
                        {(this.state.name[5] != null) && <MenuCards name={this.state.name[5]} price={this.state.price[5]}/>}
                    </div>
                    <div className="row">
                        {(this.state.name[6] != null) && <MenuCards name={this.state.name[6]} price={this.state.price[6]}/>}
                        {(this.state.name[7] != null) && <MenuCards name={this.state.name[7]} price={this.state.price[7]}/>}
                        {(this.state.name[8] != null) && <MenuCards name={this.state.name[8]} price={this.state.price[8]}/>}
                    </div>
                    <div className="row">
                        {(this.state.name[9] != null) && <MenuCards name={this.state.name[9]} price={this.state.price[9]}/>}
                        {(this.state.name[10] != null) && <MenuCards name={this.state.name[10]} price={this.state.price[10]}/>}
                        {(this.state.name[11] != null) && <MenuCards name={this.state.name[11]} price={this.state.price[11]}/>}
                    </div>
                    <div className="row">
                        {(this.state.name[12] != null) && <MenuCards name={this.state.name[12]} price={this.state.price[12]}/>}
                        {(this.state.name[13] != null) && <MenuCards name={this.state.name[13]} price={this.state.price[13]}/>}
                        {(this.state.name[14] != null) && <MenuCards name={this.state.name[14]} price={this.state.price[14]}/>}
                    </div>

                </div>
            </div>
        );
    }
}

export default Menu;