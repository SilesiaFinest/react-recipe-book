import React from 'react';
import style from './recipe.module.css';

const Recipe = ({ title, calories, image, servings, ingredients }) => {
    return (
        <div className={style.recipe} >
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}kcal in {servings} servings = {Math.round(calories / servings)}kcal each</p>
            <img className={style.image } src={image} alt=""/>
        </div>
    );
}

export default Recipe;