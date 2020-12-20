import React, { useState, useEffect } from 'react';
import RecipeDetailTemplate from '../template/RecipeDetailTemplate/RecipeDetailTemplate';

export default function RecipeDetail() {
    const [recipe, setRecipe] = useState(null);

    const vars = {};
    window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function (m, key, value) {
            vars[key] = value;
        },
    );
    const { id } = vars;

    useEffect(() => {
        async function getRecipes() {
            const response = await fetch(
                `https://private-anon-a2aaa80eed-cookbook3.apiary-proxy.com/api/v1/recipes/${id}`,
            );
            const recipeFromResponse = await response.json();
            console.log(recipeFromResponse);
            setRecipe(recipeFromResponse);
        }
        getRecipes();
    }, [id]);

    if (!recipe) return <div>Loading...</div>;
    return <RecipeDetailTemplate recipe={recipe} />;
}
