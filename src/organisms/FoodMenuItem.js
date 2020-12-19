import React from 'react';
//import ReactStars from 'react-rating-stars-component';

import './FoodMenuItem.css';

export default function FoodMenuItem({ recipes }) {
    const imgUrl = 'https://source.unsplash.com/collection/190727/';
    return (
        <div>
            {recipes.map((recipe, index) => {
                console.log(recipe);
                return (
                    <div className="meal-container">
                        <img
                            key={recipe.id + '_img'}
                            src={imgUrl + index}
                            alt="meal icon"
                            className="meal-img"
                        ></img>
                        <div className="meal-informations">
                            <p key={recipe.id}>
                                <strong>{recipe.name}</strong>
                            </p>
                            <p>{Math.round(recipe.score)}/5</p>
                            <div className="meal-duration">
                                <i className="far fa-clock"></i>
                                <p>{recipe.duration} min.</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
