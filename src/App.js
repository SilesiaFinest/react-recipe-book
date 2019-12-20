import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  // API data here only for presentational purposes
  const APP_ID = '4a37bc7d';
  const APP_KEY = 'b77d61818ed98e91fc19b50d190a70f8';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getRecipes();
  },[])
  // empty array above is a 2nd argument of useEffect - this means it will run only once

  const getRecipes = async () => {
    const response = await fetch( `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button " type="submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={Math.round(recipe.recipe.calories)}
          image={recipe.recipe.image}
          servings={recipe.recipe.yield} />
      ))}
    </div>
  );
}

export default App;
