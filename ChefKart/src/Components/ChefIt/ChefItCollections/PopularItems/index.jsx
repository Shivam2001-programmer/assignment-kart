import React from 'react';
import "./PopularItems.css";

const PopularItems = ({ item }) => {
    return (
        <div>
            <div className="outer-circle">
                <div className="inner-circle">
                    <div className="popular-item-cover">
                        <img className="popular-item-image" src={item.image} alt={item.name} />
                        <div className="overlay"></div>
                        <div className="popular-item-title cur-po">{item.name}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularItems;