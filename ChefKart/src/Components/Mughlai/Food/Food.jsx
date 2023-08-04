import React, { useEffect, useState } from "react";
import "./Food.css";

const Food = () => {
    const [recipe, setRecipe] = useState([]);

    const myStyle = {
      
        fontSize: '16px',
        fontWeight: 'bold',
        

    };

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await fetch(
                "https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1"
            );
            const data = await response.json();
            console.log(data);
            setRecipe(data);
        };
        fetchRecipe();
        return () => {
            setRecipe([]);
        };
    }, []);

    return (
        <div className="container">
            <div className="description">
                <h2>{recipe?.name}</h2>
                <p>
                    Mughali Masala is a style of cookery developed in the Indian
                    Subcontinent by the imperial kitchens of the Mughal Empire
                </p>
                <span className="clock-container">
                    <img
                        className="clock-image"
                        src="https://cdn-icons-png.flaticon.com/512/132/132665.png?w=740&t=st=1691055672~exp=1691056272~hmac=a4b1133317101c2a1f78ff8cbfa95735c1a5730408c78671188f1fb5c7065cf3"
                        alt="img"
                    />
                    <span className="text">{recipe?.timeToPrepare}</span>
                </span>
            </div>
            <div className="image">
                <img
                    src="https://e1.pxfuel.com/desktop-wallpaper/292/351/desktop-wallpaper-white-background-grain-spices-section-%D0%B5%D0%B4%D0%B0-garam-masala.jpg"
                    alt="img"
                />
            </div>
            <div className="container">

            </div>

            <div className="ingredients">
                {recipe?.ingredients?.vegetables ? (
                    <div className="">
                        <h3>Vegetables</h3>
                        {recipe?.ingredients?.vegetables?.map((vegetable) => {
                            return (
                                <li className="ingredient">
                                    <div style={myStyle}>{vegetable?.name}</div>
                                    <div style={myStyle}>{vegetable?.quantity}</div>
                                </li>
                            );
                        })}
                    </div>
                ) : null}

                {recipe?.ingredients?.spices ? (
                    <>
                        <h2>Spices</h2>
                        {recipe?.ingredients?.spices?.map((spice) => {
                            return (
                                <li className="ingredient">
                                    <div style={myStyle}>{spice?.name}</div>
                                    <div style={myStyle}>{spice?.quantity}</div>
                                </li>
                            );
                        })}
                    </>
                ) : null}
            </div>
        </div>
    );
};

export default Food;
