import React from 'react';

function MenuCards(props) {
    return (
        <div>
            <div className="menuCard">{props.name}{props.price}</div>
        </div>
    );
}

export default MenuCards;