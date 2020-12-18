import React from 'react';
import FoodMenuItem from '../organisms/FoodMenuItem';

export default function RecipesListTemplate({ recipes, children }) {
    return (
        <>
            <FoodMenuItem recipes={recipes} />
            {children}
        </>
    );
}
