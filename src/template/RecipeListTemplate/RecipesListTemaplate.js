import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import FoodMenuItem from '../../organisms/FoodMenuItem/FoodMenuItem';

export default function RecipesListTemplate({ recipes }) {
    return (
        <PageWrapper>
            <FoodMenuItem recipes={recipes} />
        </PageWrapper>
    );
}
