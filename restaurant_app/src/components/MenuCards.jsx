import React from 'react';

function MenuCards(props) {
    return (
        <div>
            <div className="menuCard">
                <h1>{props.name}</h1>
                <p>{props.price}</p>
            </div>
        </div>
    );
}

export default MenuCards;