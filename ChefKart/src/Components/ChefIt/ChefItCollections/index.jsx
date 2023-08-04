import React, { useEffect, useState } from 'react';
import "./ChefItCollections.css";
import Slider from "react-slick";
import NextArrow from '../../common/Carousel/nextArrow';
import PrevArrow from '../../common/Carousel/prevArrow';
import PopularItems from './PopularItems';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />
};

const ChefPartyCollections = () => {

  const [popularDishes, setPopularDishes] = useState([]);

  useEffect(() => {
    // Fetching the data from the API
    fetch('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/')
      .then(response => response.json())
      .then(data => {
        // Extracting the dishes and popularDishes from the data
        const { popularDishes } = data;
        setPopularDishes(popularDishes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="bottom-line">
      <div className="chef-party-collections">
        <div className="max-width">
          <div className='collection-title'>Popular Dishes for You</div>

          <Slider {...settings}>
            {popularDishes.map((dish) => {
              return (
                <PopularItems item={dish} />
              );
            })}
          </Slider>

        </div>
      </div>
    </div>
  )
}

export default ChefPartyCollections;