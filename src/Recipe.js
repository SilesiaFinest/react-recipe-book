import React from 'react';

const Recipe = ({ title, calories, image, servings }) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{calories}kcal in {servings} servings = {Math.round(calories / servings)}kcal each</p>
            <img src={image} alt=""/>
        </div>
    );
}

export default Recipe;