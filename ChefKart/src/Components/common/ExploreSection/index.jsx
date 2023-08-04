import React, { useEffect, useState } from 'react';
import "./ExploreSection.css";
import Explorecard from './ExploreCard';

const ExploreSection = ({ collectionName }) => {
    const [list, setList] = useState([]);

    useEffect(() => {
        // Fetch the data from the API
        fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
            .then(response => response.json())
            .then(data => {
                // Extract the dishes from the data
                const { dishes } = data;
                setList(dishes);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className='max-width explore-section my-3'>
            <div className="collection-title">{collectionName}</div>
            <div className="explore-grid">
                {list.map(dish => (
                    <Explorecard key={dish.id} dish={dish} />
                ))}
            </div>
        </div>
    )
}

export default ExploreSection;
