import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import Img from '../../atoms/Img/Img';
import StarsRating from '../../molecules/starsRating/StarsRating';
import RecipeBottomBar from '../../organisms/RecipeBottomBar/RecipeBottomBar';
import Time from '../../molecules/Time/Time';
import './RecipeDetailTemplate.css';

export default function RecipeDetailTemplate({ recipe }) {
    return (
        <PageWrapper backButton={true} text={recipe.name}>
            <div className="recipe-detail-page">
                <Img id={recipe.id} index={1} specialClassName="detail-img" />
                <div className="detail-top-bar">
                    <StarsRating score={Math.round(recipe.score)} />
                    <Time duration={recipe.duration} />
                </div>
                <main>
                    <p>{recipe.info}</p>
                    <h2>Ingredience</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => {
                            return <li key={index}>{ingredient}</li>;
                        })}
                    </ul>
                    <h2>Příprava jídla</h2>
                    <p>{recipe.description}</p>
                </main>
                <RecipeBottomBar id={recipe.id} />
            </div>
        </PageWrapper>
    );
}
