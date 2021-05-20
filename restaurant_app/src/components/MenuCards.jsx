import React from 'react';

function MenuCards(props) {
    return (
        <div>
            <div className="menuCard">{props.name}</div>
        </div>
    );
}

export default MenuCards;