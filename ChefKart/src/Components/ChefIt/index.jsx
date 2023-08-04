import React from 'react';
import "./ChefIt.css";
import Continentals from '../common/Continentals';
import ChefItCollections from '../ChefIt/ChefItCollections';
import ExploreSection from '../common/ExploreSection';
import { useState, useEffect } from 'react';

const chefItContinentals = [
    {
        id: 1,
        title: "Kashmiri",
    },
    {
        id: 2,
        title: "Punjabi",
    },
    {
        id: 3,
        title: "Rajasthani",
    },
    {
        id: 4,
        title: "Bengali",
    },
];

const ChefIt = () => {

    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
            .then(response => response.json())
            .then(data => {
                const { dishes } = data;
                setDishes(dishes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className="max-width">
                <Continentals contList={chefItContinentals} />
                <ChefItCollections />
                <ExploreSection collectionName={"Recommended Dishes"} list = {dishes}/>
            </div>
        </div>
    )
}

export default ChefIt;