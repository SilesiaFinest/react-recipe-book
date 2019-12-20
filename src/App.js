import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  // API data here only for presentational purposes
  const APP_ID = '4a37bc7d';
  const APP_KEY = 'b77d61818ed98e91fc19b50d190a70f8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipes();
    // eslint-disable-next-line
  },[query])
  // empty array above is a 2nd argument of useEffect - this means it will run only once

  // async await fetch call for query and setRecipes update
  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  // clean way to use onChange in input
  const updateSearch = e => {
    setSearch(e.target.value);
  }

  // preventDefault to stop page refresh on form submit
  // update the setQuery state with search, this is to submit and effectively fetch input field text
  // after pressing search button, not after every character
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button " type="submit">Search</button>
      </form>
      <div className="recipes" >
        {recipes.map(recipe => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={Math.round(recipe.recipe.calories)}
            image={recipe.recipe.image}
            servings={recipe.recipe.yield}
            ingredients={recipe.recipe.ingredients} />
        ))}
      </div>
    </div>
  );
}

export default App;
