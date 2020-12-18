import React, { useState, useEffect } from 'react';
import RecipesListTemaplate from '../template/RecipesListTemaplate';

export default function RecipesList() {
    const [recipes, setRecipes] = useState(null);

    useEffect(() => {
        async function getRecipes() {
            const response = await fetch(
                'https://private-anon-2cc6ca5ec1-cookbook3.apiary-proxy.com/api/v1/recipes?limit=50&offset=0',
            );
            const recipesFromResponse = await response.json();
            setRecipes(recipesFromResponse);
        }
        getRecipes();
    }, []);

    if (!recipes) return <div>Loading...</div>;

    return <RecipesListTemaplate recipes={recipes} />;
}
