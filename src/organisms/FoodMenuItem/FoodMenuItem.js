import React from 'react';
import StarsRating from '../../molecules/starsRating/StarsRating';
import Time from '../../molecules/Time/Time';
import Img from '../../atoms/Img/Img';
import './FoodMenuItem.css';

export default function FoodMenuItem({ recipes }) {
    return (
        <div className="meals-list">
            {recipes.map((recipe, index) => {
                console.log(recipe);
                return (
                    <div className="meal-container" key={index}>
                        <a
                            key={recipe.id}
                            href={`/recipe?id=${recipe.id}`}
                            style={{ all: 'none' }}
                        >
                            <Img id={recipe.id} index={index} />
                        </a>
                        <div className="meal-informations">
                            <a key={recipe.id} href={`/recipe?id=${recipe.id}`}>
                                {recipe.name}
                            </a>
                            <StarsRating score={Math.round(recipe.score)} />
                            <Time duration={recipe.duration} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
