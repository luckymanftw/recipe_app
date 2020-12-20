import React from 'react';
import RecipesList from './pages/RecipesList';
import RecipeDetail from './pages/RecipeDetail';
import NewRecipe from './pages/NewRecipe';
import { Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/recipe">
                    <RecipeDetail />
                </Route>

                <Route exact path="/">
                    <RecipesList />
                </Route>
                <Route exact path="/newrecipe">
                    <NewRecipe />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
