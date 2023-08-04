import React from 'react';
import "./Continentals.css";

const Continentals = ({ contList }) => {
    return (
        <div>
            {contList && contList.map((category) => {
                return (
                    <div className='cont-btns btn btn-outline my-3'>{category.title}</div>
                )
            })}
        </div>
    )
}

export default Continentals;