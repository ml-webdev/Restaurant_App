import React, { Component } from 'react';
import MenuCards from './MenuCards';

class Menu extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="heading">Menu</h1>
                <div className="menu-container">
                    <div className="row1">
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

                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;