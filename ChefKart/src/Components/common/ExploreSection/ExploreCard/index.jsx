import React from 'react';
import "./ExploreCard.css";

const Explorecard = ({ dish }) => {
    return (
        <div className="container">
            <div className="card">
                <img src={dish.image} className="card-img-top" alt={dish.name} style={{ objectFit: "cover", height: "200px" ,width:"400px" }} />
                <div className="card-body">
                    <h5 className="card-title"><strong>{dish.name}</strong></h5>
                    <p className="card-text">{dish.description}</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><i className="rating-icon fa-solid fa-star"></i> {dish.rating} <i className="veg-icon fa-solid fa-seedling"></i> Pure Veg</li>
                    <li className="list-group-item">
                        <i className="ing-icon fa-solid fa-utensils"></i>  Ingredients <div className="btn btn-warning mx-3">View List</div>
                    </li>
                    <li className="list-group-item"><i className="fridge-icon fa-solid fa-temperature-low"></i> Refrigerator <i className="micro-icon fa-solid fa-fire"></i> Microwave</li>
                </ul>
            </div>
        </div>

    )
}

export default Explorecard;
